<template>
    <div>
        <header class="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!--<a class="navbar-brand" href="#">Navbar</a>-->
                <button class="navbar-toggler" id="color-line" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link to="/" class="nav-link text-white">Inicio <span class="sr-only">(current)</span></router-link>
                            <!--<a class="nav-link text-white" href="../components/Home.vue">Inicio<span class="sr-only">(current)</span></a>-->
                        </li>
                        <li class="nav-item">
                            <router-link to="/Nosotros" class="nav-link text-white">Nosotros</router-link>
                            <!--<a class="nav-link text-white" href="../components/Nosotros.vue">Nosotros</a>-->
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Contenido
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link to="/Movies" class="dropdown-item">Mejor valoradas</router-link>
                            <router-link to="/BestMovies" class="dropdown-item">Mejor del momento</router-link>
                            <!--<a class="dropdown-item" href="../components/Movies.vue">Mejor valoradas</a>
                            <a class="dropdown-item" href="../components/NewMovies.vue">Mejor del momento</a>-->
                            <div class="dropdown-divider"></div>
                            <router-link to="/ExtraMovies" class="dropdown-item">Algo mas</router-link>
                            <!--<a class="dropdown-item" href="#">Algo mas</a>-->
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled text-white" href="#">Streamers Company</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-6 mx-auto">
                            <h1 class="text-white">
                                Streamers
                            </h1>
                            <p class="text-white font-italic">
                                Una experiencia inolvidable 
                            </p>
                            <div class="list-group hover-zoom">
                                <router-link to="/Movies">
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                                        Comenzar experiencia
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header> 
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data(){
        return{

        }
    }
}
</script>
<style>
/*ESTILOS DEL NAVBAR*/ 
.header{
  background: url(../assets/familia3.jpg) no-repeat center;
  background-size: cover;
  min-height: 100vh;
}
.header .navbar {
  background-color: transparent !important;
}
</style>