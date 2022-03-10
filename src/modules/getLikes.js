export default async function getLikes(id) {
    const itemUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d5UQy3q00JntMkUFlri/likes?item_id=${id}`;
    const response = await fetch(itemUrl);
    const data = await response.json();
    console.log(data)
    return data;
  }

