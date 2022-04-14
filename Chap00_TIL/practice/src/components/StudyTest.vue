<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="text-left">opentutorials.org</b-col>
        <b-col class="text-right">도움말</b-col>
      </b-row>
    <h1>생활코딩</h1>
    <p>Coding Everybody with Jarry Clone Coding</p>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">생활코딩</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

      <b-card class="px-5 py-5 mt-5">
        <b-avatar></b-avatar> 
        
        <h2 class="mt-3">Jarry의 코딩 블로그<b-badge variant="primary">New</b-badge></h2>
        <div>
          <b-badge class="bg-primary">Primary</b-badge>
          <b-badge variant="secondary">Secondary</b-badge>
          <b-badge variant="success">Success</b-badge>
          <b-badge variant="danger">Danger</b-badge>
          <b-badge variant="warning">Warning</b-badge>
          <b-badge variant="info">Info</b-badge>
          <b-badge variant="light">Light</b-badge>
          <b-badge variant="dark">Dark</b-badge>
        </div>
      </b-card>
      <br />
      <a href="https://jarry-ha.github.io/" class="btn btn-dark btn-lg" role="button" aria-pressed="true">Get Start</a>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>