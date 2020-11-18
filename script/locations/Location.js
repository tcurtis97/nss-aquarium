export const Location = (location) => {
    return `
        <section class="fish card">
        <div><img  class="loaction__image image--card" src="images/${location.image}" /></div>
            <div class="location__name">${location.name}</div>
            <div class="location__desc">${location.description}</div>
        </section>
    `
  }