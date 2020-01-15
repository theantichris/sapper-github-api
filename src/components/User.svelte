<script>
  import Card, { Content } from '@smui/card'

  export let avatar // TODO: change to avatarUrl
  export let username
</script>

<div class="user">
  <img src="{ avatar }" alt="{ username }'s avatar" />

  <h3>{ username }</h3>
</div>

<Card>
  <Content>{ username }</Content>
</Card>