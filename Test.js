const fetchData = async () => {
    const data = await fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")

    const res = await data.json()

    console.log(res);
}