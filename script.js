var character = document.getElementById('character');
var block = document.getElementById('block');

function jump() {
    if (!character.classList.contains('animate')) {
        character.classList.add('animate');
    }
    setTimeout(function () {
        character.classList.remove('animate');
    }, 500);
}

var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    console.log("characterTop:", characterTop, "blockLeft:", blockLeft);

    if (blockLeft < 70 && blockLeft > 50 && characterTop >= 150) {
        console.log("Collision detected!");
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('Game Over!');
    }
}, 10);
