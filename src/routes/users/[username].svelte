<script>
  export async function preload(page) {
    const { username } = page.params

    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()

    if (response.status === 404) {
      this.error(404, 'Not found')
    }

    return { data }
  }
</script>