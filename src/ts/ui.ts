function createGarage(): string {
    let content =
      `<section class='garage'>\
        <div class='garage-control'>\
          <div class='garage-control__create'>\
            <input class='input input-create'>\
            <input class='input input-create'>\
            <button class='button button-garage'>CREATE</button>\
          </div>\
          <div class='garage-control__update'>\
            <input class='input input-update'>\
            <input class='input input-create'>\
            <button class='button button-garage'>UPDATE</button>\
          </div>\
          <div class='garage-control__button'>\
            <button class='button button-garage'>RACE</button>\
            <button class='button button-garage'>RESET</button>\
            <button class='button button-garage'>GENERATE CARS</button>\
          </div>\
        </div>\
        <div class='garage-content'>\
          <h3 class='garage-content__title'>Garage (${4})</h3>\
        </div>\
      `
    return content
}

function createBody(): void {
  let content =
    "<header class='header'>\
      <div class='header-content'>\
        <button class='button button-header'>TO GARAGE</button>\
        <button class='button button-header'>TO WINNERS</button>\
      </div>\
    </header>";
  
  content +=
    "<footer class='footer'>\
    </footer>";

  document.body.innerHTML = content;
}



createBody();
