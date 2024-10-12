<template>
    <div id="map-container">
        <div id="map"></div>
        <div id="coordinates" class="coordinates"></div>
        <div id="searchBar">
            <input type="text" v-model="searchQuery" @keyup.enter="searchLocation" placeholder="Search" />
        </div>
        <button @click="enableMarkerMode">Add Marker</button>
        <button @click="clearMarkers">Clear Markers</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiYnlmbzFvNCIsImEiOiJjbTI1bnF6OXgwMHM5MmpwdnQ5bGE2YXY2In0.6Rga4KmYs0RfvsKhEq96iA'

const markers = ref([])
const isMarkerMode = ref(false)
const searchQuery = ref('')

const enableMarkerMode = () => {
    console.log("Marker mode enabled");
    isMarkerMode.value = true
}

const clearMarkers = () => {
    markers.value.forEach(marker => marker.remove())
    markers.value = []
}

const searchLocation = async () => {
    const query = searchQuery.value
    if (!query) return

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxgl.accessToken}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        if (data.features && data.features.length > 0) {
            const [lng, lat] = data.features[0].center
            map.setCenter([lng, lat])
            map.setZoom(14)

            const newMarker = new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .addTo(map)
            markers.value.push(newMarker)

            console.log(`Location found: ${query}, Coordinates: (${lng}, ${lat})`)
        } else {
            console.log(`No results found for: ${query}`)
        }
    } catch (error) {
        console.error('Error fetching location:', error)
    }
}

let map

onMounted(() => {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [144.9631, -37.8136],
        zoom: 10,
    })

    const coordinatesDiv = document.getElementById('coordinates')

    map.on('mousemove', (e) => {
        const { lng, lat } = e.lngLat
        coordinatesDiv.innerHTML = `Longitude: ${lng.toFixed(4)}, Latitude: ${lat.toFixed(4)}`
    })

    map.on('click', (e) => {
        if (isMarkerMode.value) {
            const newMarker = new mapboxgl.Marker()
                .setLngLat(e.lngLat)
                .addTo(map)
            markers.value.push(newMarker)
            console.log("Marker added at: ", e.lngLat);
            isMarkerMode.value = false
        }
    })
})
</script>

<style scoped>
#map-container {
    width: 100vw;
    height: 100vh;
    position: relative;
}

#map {
    width: 100%;
    height: 100%;
}

#coordinates {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: white;
    padding: 10px;
    border-radius: 3px;
    font-size: 14px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    z-index: 2;
}

#searchBar {
    position: absolute;
    bottom: 60px;
    right: 10px;
    z-index: 3;
    background-color: white;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

button {
    position: absolute;
    bottom: 20px;
    left: 10px;
    z-index: 3;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

button+button {
    left: 150px;
}
</style>
