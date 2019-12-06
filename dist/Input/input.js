"use strict";
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        name: {
            type: String,
            value: ''
        },
        label: {
            type: String,
            value: ''
        },
        value: {
            type: String,
            value: ''
        },
        type: {
            type: String,
            value: ''
        },
        icon: {
            type: String,
            value: ''
        },
        iconColor: {
            type: String,
            value: '#FD7622'
        },
        iconSize: {
            type: String,
            value: '36rpx'
        },
        placeholder: {
            type: String,
            value: ''
        },
        disabled: {
            type: Boolean,
            value: false
        },
        autosize: {
            type: Boolean,
            value: ''
        },
        placeholderStyle: {
            type: String,
            value: ''
        },
        placeholderClass: {
            type: String,
            value: ''
        },
        focus: {
            type: Boolean,
            value: false
        },
        confirmType: {
            type: String,
            value: ''
        },
        confirmHold: {
            type: Boolean,
            value: false
        },
        cursor: {
            type: Number,
            value: null
        },
        selectionStart: {
            type: Number,
            value: -1
        },
        selectionEnd: {
            type: Number,
            value: -1
        },
        adjustPosition: {
            type: Boolean,
            value: true
        },
        holdKeyboard: {
            type: Boolean,
            value: false
        },
        maxlength: {
            type: Number,
            value: 140
        },
        cursorSpacing: {
            type: Number,
            value: 0
        },
        clearable: {
            type: Boolean,
            value: false
        },
        error: {
            type: Boolean,
            value: false
        },
        errorMessage: {
            type: String,
            value: ''
        },
        rules: {
            type: Array,
            value: null
        },
        border: {
            type: Boolean,
            value: false
        },
        button: {
            type: String,
            value: null
        },
        required: {
            type: Boolean,
            value: false
        }
    },
    externalClasses: ['ext-class'],
    data: {
        focused: false
    },
    methods: {
        focus(e) {
            if (!this.data.focused) {
                this.setData({ focused: true });
            }
            this.triggerEvent('focus', e);
        },
        change(e) {
            let { value = '' } = e.detail || {};
            this.setData({ value }, () => {
                this.triggerEvent('change', e);
            });
        },
        blur(e) {
            if (this.data.focused) {
                this.setData({ focused: false });
            }
            this.triggerEvent('blur', e);
        },
        confirm(e) {
            this.triggerEvent('confirm', e);
        },
        keyboardheightchange(e) {
            this.triggerEvent('keyboardheightchange', e);
        },
        clear() {
            this.setData({ value: '' });
        }
    }
});
