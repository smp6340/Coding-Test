function solution(board, moves) {
    const stack = [];
    let result = 0;
    moves.forEach(order => {
        const doll = pickup(board, order - 1);
        if(doll){
            if(stack[stack.length - 1] === doll){
                stack.pop();
                result += 2;
            }
            else {
                stack.push(doll);
            }
        }
    });
    return result;
}

function pickup(board, order){
    for(let i = 0; i < board.length; i++){
        if(board[i][order] !== 0){
            const doll = board[i][order];
            board[i][order] = 0;
            return doll;
        }
    }
}