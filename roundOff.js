<script>
    function roundOff(number) {
        var x = number % 1;
        return number - x + (x / 1 + 1.5 >> 1) * 1
    }

    document.write(roundOff(26.2));
    document.write("<br>");
    document.write(roundOff(26.7));
</script>
