function splineMultiplier(xs, ys, n) {
    const spline = new Spline(xs, ys);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const step = (maxX - minX) / n; // Step size based on resolution n

    const new_xs = [];
    const new_ys = [];

    for (let i = 0; i <= n; i++) {
        const new_x = minX + i * step;
        new_xs.push(new_x);
        new_ys.push(spline.at(new_x));
    }

    return { new_xs, new_ys };
}