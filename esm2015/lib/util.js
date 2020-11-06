export function mat_to_list(m) {
    return m.flat();
}
export function set_rc(dtb) {
    dtb.forEach((row, r) => {
        row.forEach((cell, c) => {
            cell._r = r;
            cell._c = c;
        });
    });
}
export function fmt_cell_ui(flat) {
    flat.forEach(cell => {
        if (cell.ui === undefined) {
            cell.ui = "";
        }
    });
}
export function set_dflt(flat) {
    flat.forEach(cell => {
        let cond = cell._c % 2 === 1;
        if (cond && (cell.ui === "")) {
            cell.ui = "background-color:#F8F8F8;color:#333333;font-size:18px;font-weight:400;font-family:PingFang SC;";
        }
    });
}
export function set_ui(flat, ui_func) {
    flat.forEach(cell => {
        ui_func(cell);
    });
}
export function calc_and_set(instance) {
    set_rc(instance.dtb);
    instance.rownum = instance.dtb.length;
    instance.colnum = instance.dtb[0].length;
    if (instance.ratio === undefined) {
        let cell_width = parseInt(instance.width) / instance.rownum;
        let cell_height = parseInt(instance.height) / instance.colnum;
        instance.ratio = cell_width.toString() + ":" + cell_height.toString();
    }
    else {
    }
    if (instance.gutter === undefined) {
        instance.gutter = "0";
    }
    else {
    }
    ////
    if (instance.dflt === undefined) {
        instance.dflt = true;
    }
    else {
    }
    if (instance.ui_func === undefined) {
        instance.ui_func = (cell) => { };
    }
    else {
    }
    ////
    instance.flat = mat_to_list(instance.dtb);
    fmt_cell_ui(instance.flat);
    if (instance.dflt) {
        set_dflt(instance.flat);
    }
    set_ui(instance.flat, instance.ui_func);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIvbW50L3NkYi9BTkdVSS9wcm9qL3Byb2plY3RzL3NtYWxsLWdyaWQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLFdBQVcsQ0FBQyxDQUFNO0lBQ2hDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLEdBQUc7SUFDeEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsSUFBSTtJQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2hCLElBQUcsSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUE7U0FDWDtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUdELE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBSTtJQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxnR0FBZ0csQ0FBQztTQUM1RztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsSUFBSSxFQUFDLE9BQU87SUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxRQUFRO0lBQ25DLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN0QyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDaEMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzVELElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5RCxRQUFRLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3ZFO1NBQU07S0FDTjtJQUNELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDakMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7S0FDdkI7U0FBTTtLQUNOO0lBQ0QsSUFBSTtJQUNKLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDL0IsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDdEI7U0FBTTtLQUNOO0lBQ0QsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtRQUNsQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFDLEVBQUUsR0FBQyxDQUFDLENBQUM7S0FDL0I7U0FBTTtLQUNOO0lBQ0QsSUFBSTtJQUNKLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtRQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FBQztJQUM3QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBtYXRfdG9fbGlzdChtOiBhbnkpIHtcbiAgcmV0dXJuIG0uZmxhdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0X3JjKGR0Yikge1xuICBkdGIuZm9yRWFjaCgocm93LCByKSA9PiB7XG4gICAgcm93LmZvckVhY2goKGNlbGwsIGMpID0+IHtcbiAgICAgIGNlbGwuX3IgPSByO1xuICAgICAgY2VsbC5fYyA9IGM7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm10X2NlbGxfdWkoZmxhdCkge1xuICBmbGF0LmZvckVhY2goY2VsbCA9PiB7XG4gICAgICBpZihjZWxsLnVpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2VsbC51aT1cIlwiXG4gICAgICB9XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRfZGZsdChmbGF0KSB7XG4gIGZsYXQuZm9yRWFjaChjZWxsID0+IHtcbiAgICBsZXQgY29uZCA9IGNlbGwuX2MgJSAyID09PSAxO1xuICAgIGlmIChjb25kICYmIChjZWxsLnVpID09PSBcIlwiKSkge1xuICAgICAgY2VsbC51aSA9IFwiYmFja2dyb3VuZC1jb2xvcjojRjhGOEY4O2NvbG9yOiMzMzMzMzM7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtZmFtaWx5OlBpbmdGYW5nIFNDO1wiO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRfdWkoZmxhdCx1aV9mdW5jKSB7XG4gIGZsYXQuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgIHVpX2Z1bmMoY2VsbClcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjX2FuZF9zZXQoaW5zdGFuY2UpIHtcbiAgc2V0X3JjKGluc3RhbmNlLmR0Yik7XG4gIGluc3RhbmNlLnJvd251bSA9IGluc3RhbmNlLmR0Yi5sZW5ndGg7XG4gIGluc3RhbmNlLmNvbG51bSA9IGluc3RhbmNlLmR0YlswXS5sZW5ndGg7XG4gIGlmIChpbnN0YW5jZS5yYXRpbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IGNlbGxfd2lkdGggPSBwYXJzZUludChpbnN0YW5jZS53aWR0aCkgLyBpbnN0YW5jZS5yb3dudW07XG4gICAgbGV0IGNlbGxfaGVpZ2h0ID0gcGFyc2VJbnQoaW5zdGFuY2UuaGVpZ2h0KSAvIGluc3RhbmNlLmNvbG51bTtcbiAgICBpbnN0YW5jZS5yYXRpbyA9IGNlbGxfd2lkdGgudG9TdHJpbmcoKSArIFwiOlwiICsgY2VsbF9oZWlnaHQudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgfVxuICBpZiAoaW5zdGFuY2UuZ3V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICBpbnN0YW5jZS5ndXR0ZXIgPSBcIjBcIjtcbiAgfSBlbHNlIHtcbiAgfVxuICAvLy8vXG4gIGlmIChpbnN0YW5jZS5kZmx0ID09PSB1bmRlZmluZWQpIHtcbiAgICBpbnN0YW5jZS5kZmx0ID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgfVxuICBpZiAoaW5zdGFuY2UudWlfZnVuYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaW5zdGFuY2UudWlfZnVuYyA9IChjZWxsKT0+e307XG4gIH0gZWxzZSB7XG4gIH0gIFxuICAvLy8vXG4gIGluc3RhbmNlLmZsYXQgPSBtYXRfdG9fbGlzdChpbnN0YW5jZS5kdGIpO1xuICBmbXRfY2VsbF91aShpbnN0YW5jZS5mbGF0KTtcbiAgaWYgKGluc3RhbmNlLmRmbHQpIHtzZXRfZGZsdChpbnN0YW5jZS5mbGF0KTt9XG4gIHNldF91aShpbnN0YW5jZS5mbGF0LGluc3RhbmNlLnVpX2Z1bmMpO1xufVxuXG4iXX0=