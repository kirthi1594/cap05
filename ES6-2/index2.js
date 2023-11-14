// import user
    // 1. default import (one time)
    // import user from './index1.js'
    import fun from './index1.js'

    // console.log(user)
    fun('kirthi')

    //2. Named import (multiple)
    import { account, fun2 } from './index1.js'

    console.log(account.type)
    fun2('kirthi')