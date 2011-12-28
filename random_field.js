function random_field(w, h, size) {
    var r = {width: w, height: h, data: []};
    for (var x = 0; x < w; x++) {
        for (var y = 0; y < h; y++) {
            r.data.push((Math.random() * 2 - 1) * size);
        }
    }
    function set_data(x, y, val) {
        r.data[(x & (w - 1)) + (y & (h - 1)) * w] = val;
    }
    function get_data(x, y) {
        return r.data[(x & (w - 1)) + (y & (h - 1)) * w];
    }
    r.set = set_data;
    r.get = get_data;
    var scale = 1 / w;
    var scalemod = 1.0;
    for (var cur_step = size; cur_step >= 1; cur_step = Math.floor(cur_step / 2)) {
        var dub_step = cur_step * 2;
        for (var x = 0; x < w; x += cur_step) {
            for (var y = 0; y < h; y += cur_step) {
                var tl = r.get(x, y);
                var tr = r.get(x, y + dub_step);
                var bl = r.get(x + dub_step, y);
                var br = r.get(x + dub_step, y + dub_step);
                var m = (tl + tr + bl + br) / 4;
                r.set(x + cur_step, y + cur_step, m + (Math.random() * 2 - 1) * cur_step);
            }
        }
        for (var x = 0; x < w; x += cur_step) {
            for (var y = 0; y < h; y += cur_step) {
                var tl = r.get(x, y);
                var tr = r.get(x, y + dub_step);
                var bl = r.get(x + dub_step, y);
                var m = r.get(x + cur_step, y + cur_step);
                var mt = r.get(x + cur_step, y - cur_step);
                var ml = r.get(x - cur_step, y + cur_step);
                var t = (tl + tr + m + mt) / 4;
                var l = (tl + bl + m + ml) / 4;
                r.set(x + cur_step, y, t + (Math.random() * 2 - 1) * cur_step * 0.5 * scale);
                r.set(x, y + cur_step, l + (Math.random() * 2 - 1) * cur_step * 0.5 * scale);
            }
        }
        scale *= (scalemod + 0.8);
        scalemod *= 0.3;
    }
    return r;
}
