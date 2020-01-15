<script>
  import { onMount } from 'svelte'

  let users

  onMount(async () => {
    const response = await fetch('https://api.github.com/users')
    const data = await response.json()
    users = data
  })
</script>