export default {
    jump: new KeyboardEvent ('keydown', {key: 'Space', keyCode: 32}),
    diapatch(event) {
        document.dispatchEvent(this[event]);
    }
}