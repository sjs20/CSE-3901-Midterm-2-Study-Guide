function findAll(n, elt) {
    let indices = [];
    let i = n.indexOf(elt);
    while (i != -1) {
        indices.push(i);
        i = n.indexOf(elt, i + 1);
    }
    return indices;
}

    