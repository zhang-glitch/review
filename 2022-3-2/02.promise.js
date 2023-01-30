  async function foo() {
      const res1 = await Promise.reject("error----------")
      console.log("res1:", res1)
    }

    foo().catch(err => {
      console.log("err:", err) // error---------
    })
