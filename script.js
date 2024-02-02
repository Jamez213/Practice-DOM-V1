const colors = {
    'Red': '#FF0000',
    'Blue': '#0000FF',
    'Green': '#00FF00',
    'Violet': '#9400D3',
    'Black': '#000000',
    'White': '#FFFFFF',
    'Orange': '#FFA500',
    'Gray': '#808080',
    'Brown': '#A52A2A',
    'Yellow': '#FFFF00',
    'Pink': '#FFC0CB',
    'Cyan': '#00FFFF'
};

for (const color in colors) {
    document.getElementById(color).addEventListener('click', function() {
        document.body.style.backgroundColor = colors[color];
    });
}