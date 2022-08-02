function reset(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export default reset;