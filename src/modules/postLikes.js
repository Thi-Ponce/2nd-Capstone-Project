export default async function postLikes(id) {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d5UQy3q00JntMkUFlri/likes', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
}