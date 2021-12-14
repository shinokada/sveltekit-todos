import clientPromise from '$lib/db'
import * as cookie from 'cookie'
import { v4 as uuid } from 'uuid'

export const post = async (context) => {
  const confirmationCode = JSON.parse(context.body)
  // console.log('mycode: ', confirmationCode)
  try {
    const client = await clientPromise
    const db = client.db('Todos')
    const user = await db.collection('users').findOne({
      confirmationCode
    })
    // console.log('user: ', user)

    if (!user) {
      return {
        status: 404,
        body: {
          message: 'User not found'
        }
      }
    } else {
      const response = updateStatus(user)
      const cookieId = uuid()
      await db.collection('cookies').insertOne({ cookieId: cookieId, uid: user._id })

      // Set cookie
      const headers = {
        'Set-Cookie': cookie.serialize('session_id', cookieId, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 30,
          sameSite: 'strict',
          path: '/'
        })
      }
      
      return {
        status: 200,
        headers,
        body: {
          message: 'Updated status to Active.',
          user: {
            uid: user._id,
            name: user.name,
            email: user.email
          }
        }
      }
  //     return {
  //       status: 200,
  //       body: {
  //         update:response,
  //         message: 'Email is confirmed. Please log in.'
  //       }
  //     }
    }
  } catch (err) {
    console.log(err)
    return {
      status: 500,
      body: {
        error: 'Con001: An error occured'
      }
    }
  }
}

async function updateStatus (user) {
  const client = await clientPromise
  const db = client.db('Todos')
  const collection = db.collection('users')
  await collection.updateOne(
    { _id: user._id },
    { $set: { status: "Active" } }
  )

  console.log('Updated')
}