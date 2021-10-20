<script>
  import { Phone } from './index'
</script>

<div class="container">
  <Phone />
  <div class="description">
    <p>Chatter is a full-stack micro blogging application with user auth that allows 
      users to post 280 character “Chats.” A user can edit their Chats and respond to 
      another user’s Chats. Includes form validation on register/login forms. 
      Built with a Ruby on Rails/PostgreSQL backend and a React/Next.js frontend.</p>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
  }

  .description {
    background-color: #3b3b3b;
    grid-column: 4 / 11;
    grid-row: 1 / 1;
    align-self: center;
    padding: 20px;
    border-radius: 5px;
    font-size: 1.1rem;
    color: var(--dark-grey);
    line-height: 27px;
  }

</style>