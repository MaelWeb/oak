import del from 'del';
import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import path from 'path';
import csso from 'gulp-csso';
import gulpif from 'gulp-if';
import alisa from 'gulp-wechat-weapp-src-alisa';
import uglify from 'gulp-uglify-es';
import imageMin from 'gulp-imagemin';
import print from 'gulp-print';
import changed from 'gulp-changed';
import ts from 'gulp-typescript';

const isProd = process.env.NODE_ENV === 'production';
const tsProject = ts.createProject(path.resolve(__dirname, '../tsconfig.json'));

// 匹配文件路径
const paths = {
    sassPath: ['../src/**/*.scss', '../src/**/*.wxss'],
    tsPath: isProd ? ['../src/**/*.ts'] : ['../demo/src/**/*.ts', '../src/**/*.ts'],
    copy: ['../src/**/*.wxml', '../src/**/*.json', '../src/**/*.wxs'],
    demoStyle: ['../demo/src/**/*.scss', '../demo/src/**/*.wxss', '!../demo/src/dist'],
    democopy: ['../demo/src/**/*.wxml', '../demo/src/**/*.json', '../demo/src/**/*.wxs', '!../demo/src/dist'],
    demoimages: ['../demo/src/images/*.*'],
};


const DEST = isProd ? '../dist' : '../demo/dist/';
const DemoDest = '../demo/dist/';

function _join(dirname) {
    return path.join(__dirname, '../src', dirname);
}

const uglifyOpts = {
    // mangle: false,
    compress: {
        drop_console: true,
    },
};

// 路径别名配置
const alisaConfig = {
    'Style': _join('style'),
    'WXS': _join('wxs'),
    'Mixins': _join('mixins'),
};

const styles = (src, dest, base) => gulp.src(src, {
        base,
    })
    .pipe(changed(dest, {
        extension: '.wxss',
    }))
    .pipe(print(filepath => `Build Scss: ${filepath}`))
    .pipe(alisa(alisaConfig))
    .pipe(sass())
    // .pipe(gulpif(isProd, csso({
    //     comments: false,
    // })))
    .pipe(rename({
        extname: '.wxss',
    }))
    .pipe(gulp.dest(dest));

const scripts = (src, dest) => gulp.src(src)
    .pipe(changed(dest))
    .pipe(print(filepath => `Build Js: ${filepath}`))
    .pipe(alisa(alisaConfig))
    .pipe(tsProject())
    // .pipe(gulpif(isProd, uglify(uglifyOpts)))
    .pipe(gulp.dest(dest));


const copy = (src, dest) => gulp.src(src)
    .pipe(changed(dest))
    .pipe(print(filepath => `Copy File: ${filepath}`))
    .pipe(alisa(alisaConfig))
    .pipe(gulp.dest(dest));

const clean = dest => del([dest], {
    force: true,
});


function srcStyle() {
    return styles(paths.sassPath, DEST, '../src');
}

function taskScripts() {
    return scripts(paths.tsPath, DEST);
}

function srcCopy() {
    return copy(paths.copy, DEST);
}

function srcClean() {
    return clean(DEST);
}

function demoStyle() {
    return styles(paths.demoStyle, DemoDest, '../demo/src');
}

function demoCopy() {
    return copy(paths.democopy, DemoDest);
}

function demoClean() {
    return clean(DemoDest);
}

function demoImagemin() {
    return gulp.src(paths.demoimages)
        .pipe(changed(`${DemoDest}/images/`))
        .pipe(print(filepath => `Compress Image: ${filepath}`))
        .pipe(imageMin())
        .pipe(gulp.dest(`${DemoDest}/images/`));
}

function watchFiles() {
    gulp.watch(paths.sassPath, srcStyle);
    gulp.watch(paths.tsPath, taskScripts);
    gulp.watch(paths.copy, srcCopy);
    gulp.watch(paths.democopy, demoCopy);
    gulp.watch(paths.demoStyle, demoStyle);
    gulp.watch(paths.demoimages, demoImagemin);

    console.log('\r\nStart watch file...\r\n');
    // cb();
}

let build;

if (isProd) {
    build = gulp.series(srcClean, gulp.parallel(srcStyle, taskScripts, srcCopy));
} else {
    build = gulp.series(srcClean, demoClean, gulp.parallel(srcStyle, taskScripts, srcCopy, demoCopy, demoStyle, demoImagemin), watchFiles);
}

export default build;
