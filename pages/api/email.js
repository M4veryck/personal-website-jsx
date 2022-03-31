// export default function handler(req, res) {
//     const formData = req.body

//     const data = {
//         service_id: 'contact_service',
//         template_id: 'contact_form',
//         user_id: process.env.user_id,
//         template_params: formData,
//         accessToken: process.env.emailjs_token,
//     }
//     console.log(data)

//     try {
//         fetch('https://api.emailjs.com/api/v1.0/email/send', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         })
//     } catch (err) {
//         res.status(400).end(
//             JSON.stringify({
//                 message: 'Something went wrong, please try again',
//                 error: err,
//             })
//         )
//         return
//     }
//     res.status(200).json(
//         JSON.stringify({
//             message: `Email from ${formData.user_email} sent succesfully`,
//         })
//     )
// }
