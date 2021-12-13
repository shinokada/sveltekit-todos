import clientPromise from '$lib/db'
// import { page } from '$app/stores';

// const confirmationCode = page.params.slug

// console.log('confirmationcode: ', confirmationCode)
export async function load(ctx) {
  let slug = ctx.page.params.slug
  return { props: { slug }}
}

// export const get = async (context) => {
//   try {
//     const confirmationCode = context.params.confirmationCode
//     console.log('confirmationcode: ', confirmationCode)
//     const client = await clientPromise
//     const db = client.db('Todos')
//     const user = await db.collection('users').findOne({ confirmationCode })
//     console.log('user: ', user)
    
//     if (!user) {
//       return {
//         status: 404,
//         body: {
//           message: 'User not found'
//         }
//       }
//     } else {
//       return {
//         status: 200,
//         body: {
//           message: 'Email is confirmed. Please log in.'
//         }
//       }
//     }
//   } catch (err) {
//     console.log(err)
//     return {
//       status: 500,
//       body: {
//         error: 'Con001: An error occured'
//       }
//     }
//   }
//   //   User.findOne({
//   //     confirmationCode: body.params.confirmationCode,
//   //   })
//   //     .then((user) => {
//   //       console.log(user);
//   //       if (!user) {
//   //         return res.status(404).send({ message: "User Not found." });
//   //       }
//   //       user.status = "Active";
//   //       user.save((err) => {
//   //         if (err) {
//   //           res.status(500).send({ message: err });
//   //           return;
//   //         }
//   //       });
//   //     })
//   //     .catch((e) => console.log("error", e));
//   // };
// }