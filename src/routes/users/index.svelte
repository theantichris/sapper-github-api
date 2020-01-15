<script>
  import { onMount } from 'svelte'

  let users

  const clientId = process.env.SAPPER_APP_GITHUB_CLIENT_ID
  const clientSecret = process.env.SAPPER_APP_GITHUB_CLIENT_SECRET

  onMount(async () => {
    const response = await fetch(`https://api.github.com/users?client_id=${clientId}&client_secret=${clientSecret}`)
    const data = await response.json()
    users = data
  })
</script>