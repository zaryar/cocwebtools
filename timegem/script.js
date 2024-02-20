document.getElementById('calculate').addEventListener('click', function() {
    var cost1 = document.getElementById('cost1').value || 0;
    var days1 = document.getElementById('days1').value || 0;
    var hours1 = document.getElementById('hours1').value || 0;

    var cost2 = document.getElementById('cost2').value || 0;
    var days2 = document.getElementById('days2').value || 0;
    var hours2 = document.getElementById('hours2').value || 0;

    var time1 = parseInt(days1) * 24 + parseInt(hours1);
    var time2 = parseInt(days2) * 24 + parseInt(hours2);

    var efficiency1 = cost1 / time1;
    var efficiency2 = cost2 / time2;

    var result = 'Item1 efficiency: ' + efficiency1 + ', Item2 efficiency: ' + efficiency2 + '. ';

    if (efficiency1 < efficiency2) {
        result += 'Item1 is more cost/time efficient.';
    } else if (efficiency2 < efficiency1) {
        result += 'Item2 is more cost/time efficient.';
    } else {
        result += 'Both items have the same cost/time efficiency.';
    }

    document.getElementById('result').innerText = result;
});