function fn({ params, callback }) {
  params = { ...params, callback }

  console.log(params)
}

fn({
  params: { name: 'zh' },
  callback: 'show'
})