var config = {
    targetNum : null,
    minNum : 1,
    maxNum : 100,
    guessNum : '??'
}

var common = {
    // 重置 目標數字
    resetTargetNum : function()
    {
        // 呼叫 API 取得數值，設定目標時間
        config.targetNum = Math.floor( Math.random() * ( config.maxNum - config.minNum + 1 ) + config.minNum );
    }
}