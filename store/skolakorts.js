import Cookies from 'js-cookie'

export const state = () => ({  
  post: []
})

export const mutations = {  
  setpost(state, post) {
    state.post = post
  },
  add(state, item) {
    const record = state.post.find(i => i.id === item.id)

    if (!record) {
      state.post.push({
        quantity: 1,
        ...item
      })
    } else {
      record.quantity++
    }
    Cookies.set('posts', state.post)
  },
  remove(state, item) {
    const record = state.post.find(i => i.id === item.id)

    if (record.quantity > 1) {
      record.quantity--
    } else {
      const index = state.post.findIndex(i => i.id === item.id)
      state.post.splice(index, 1)
    }
    Cookies.set('posts', state.post)
  },
  emptyList(state) {
    state.post = []
    Cookies.set('posts', state.post)
  }
}

export const getters = {  
  post: state => {
    return state.post
  },
  price: state => {
    return state.post.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    )
  },
  numberOfpost: state => {
    return state.post.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    )
  }
}