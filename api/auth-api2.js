import firebase from 'firebase/app'
import 'firebase/auth'

export const logoutUser = () => {
  firebase.auth().signOut()
}

export const signInUser = async ({email,}) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmail(email)
    firebase.auth().currentUser.updateProfile({
      displayName: name,
    })
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const loginUser = async ({ email }) => {
  try {
    const user = await firebase
      .auth()
      .signInWithEmail(email)
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const sendEmail = async (email) => {
  try {
    await firebase.auth().sendResetEmail(email)
    return {}
  } catch (error) {
    return {
      error: error.message,
    }
  }
}
