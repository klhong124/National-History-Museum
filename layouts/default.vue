<template>
    <div id="app-layout">
      <main>
        <nav class="nav">
            <Logo class="nav__logo"/>
            <div class="nav__title">National History Museum</div>
            <button class="nav__button">
                Menu
            </button>
        </nav>
       <slot />
      </main>
    </div>
  </template>

  <style lang="scss" scoped>

    .nav {
        display: flex;
        align-items: center;
        padding: 2px 8%;
        background: grey;

        &__logo{
            margin: 0 12px;
        }

        &__button{
            margin-left: auto;
        }
    }
  </style>