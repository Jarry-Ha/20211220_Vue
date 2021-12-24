<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">Contact</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <router-link to="/Home" class="nav-link">HOME</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                    
                    <li class="nav-item active">
                        <router-link to="/ContactGetList" class="nav-link">Get Contact List</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/ContactAdd" class="nav-link">Add Contact</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>