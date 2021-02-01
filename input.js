let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

someElement.addEventListener('touchstart', process_touchstart, false);
someElement.addEventListener('touchmove', process_touchmove, false);
someElement.addEventListener('touchcancel', process_touchcancel, false);
someElement.addEventListener('touchend', process_touchend, false);

// touchstart handler
function process_touchstart(e) {
    // Use the event's data to call out to the appropriate gesture handlers
    switch (e.touches.length) {
        case 1:
            handle_one_touch(e);
            break;
        case 2:
            handle_two_touches(e);
            break;
        case 3:
            handle_three_touches(e);
            break;
        default:
            gesture_not_supported(e);
            break;
    }
}

someElement.addEventListener('touchstart', function(e) {
    // Iterate through the touch points that were activated
    // for this element and process each event 'target'
    for (var i = 0; i < e.targetTouches.length; i++) {
        process_target(e.targetTouches[i].target);
    }
}, false);

// touchmove handler
function process_touchmove(e) {
    // Set call preventDefault()
    e.preventDefault();
}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}