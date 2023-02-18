const fs = require("fs");

class Matrix {
    static rotateBlockNext(matrix) {
        let temp = []
        let m = matrix.length;
        let n = matrix[0].length;
        let index1 = 0;
        let index2 = m - 1;
        for (let i = 0; i < n; i++) {
            let t = [];
            for (let j = 0; j < m; j++) {
                t[j] = matrix[index2][index1];
                index2--;
            }
            index2 = m - 1;
            index1++;
            temp[i] = t;
        }
        return temp;
    }

    static symmetryBlock(matrix) {
        let m = matrix.length;
        let n = matrix[0].length;
        for (let i = 0; i < m; i++)
            for (let j = 0; j < n / 2; j++) {
                let t = matrix[i][j];
                matrix[i][j] = matrix[i][n - j - 1];
                matrix[i][n - j - 1] = t;
            }
        return matrix;
    }
}
class Algorithm {
    constructor() {
        console.log("Algorithm");
        this.result = new Set();
        this.N_result = 0;
        this.matrix = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        this.block = [
            [
                [2, 0],
                [1, 2]
            ],
            [
                [1, 0],
                [2, 1]
            ],
            [
                [2, 0],
                [1, 1]
            ],
            [
                [2, 0],
                [1, 1]
            ],
            [
                [1, 2]
            ],
            [
                [1, 1]
            ]
        ];
        this.solve();
    }

    copyMatrix(matrix) {
        let temp = [];
        for (let i = 0; i < matrix.length; i++) {
            let temp2 = [];
            for (let j = 0; j < matrix[0].length; j++)
                temp2[j] = matrix[i][j];
            temp[i] = temp2;
        }
        return temp;
    }

    solve() {

        this.N = 4;
        let matrix = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        this.dfs(1, matrix, this.copyMatrix(matrix));


        let arr_temp = [];
        this.result.forEach((item) => {
                item = JSON.parse(item)
                arr_temp.push({
                    data: item.data,
                    result: item.result
                });
            })
            // console.log(arr_temp);
        fs.writeFileSync('./data/file.json', JSON.stringify(arr_temp), (error) => {
            if (error) throw error;
        });
        console.log([...this.result]);
    }

    randomLevel() {
        let temp = [...this.result];
        let level = temp[Math.floor(Math.random() * 1000000) % temp.length];
        let data = JSON.parse(level).data;
        console.log("Level ", JSON.parse(level).data);
        for (let i = 0; i < this.N; i++)
            for (let j = 0; j < this.N; j++)
                data[i][j] -= 1;
        return data;
    }

    isLocation(matrix, block, indexI, indexJ) {
        // console.log(matrix);
        if (indexI + block.length - 1 >= matrix.length)
            return false;
        if (indexJ + block[0].length - 1 >= matrix[0].length)
            return false;
        for (let i = 0; i < block.length; i++)
            for (let j = 0; j < block[0].length; j++)
                if (matrix[indexI + i][indexJ + j] * block[i][j] != 0)
                    return false;
        return true;
    }



    dfs(index, matrix, R) {
        let result_temp = this.copyMatrix(matrix);
        let R_temp = this.copyMatrix(R);
        let block_current = this.block[index - 1];
        for (let rotate = 1; rotate <= 8; rotate++) {
            result_temp = result_temp = this.copyMatrix(matrix);
            R_temp = this.copyMatrix(R);
            let m = block_current.length;
            let n = block_current[0].length;
            for (let i = 0; i < this.N; i++)
                for (let j = 0; j < this.N; j++) {
                    if (this.isLocation(result_temp, block_current, i, j)) {
                        for (let i2 = 0; i2 < m; i2++)
                            for (let j2 = 0; j2 < n; j2++) {
                                result_temp[i + i2][j + j2] += block_current[i2][j2];
                                if (block_current[i2][j2] != 0)
                                    R_temp[i + i2][j + j2] = index;
                            }
                        if (index == 6) {
                            this.result.add(JSON.stringify({ data: result_temp, result: R_temp }));
                        } else
                            this.dfs(index + 1, result_temp, R_temp);
                    }
                    result_temp = result_temp = this.copyMatrix(matrix);
                    R_temp = this.copyMatrix(R);

                }
            if (rotate == 4)
                block_current = Matrix.symmetryBlock(block_current);
            block_current = Matrix.rotateBlockNext(block_current);

        }
    }


}

new Algorithm();