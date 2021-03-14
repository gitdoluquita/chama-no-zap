/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated() {
    if (browser.runtime.lastError) {
      console.log(`Error: ${browser.runtime.lastError}`);
    } else {
      console.log("Item created successfully");
    }
  }
  
  /*
  Called when the item has been removed.
  We'll just log success here.
  */
  function onRemoved() {
    console.log("Item removed successfully");
  }
  
  /*
  Called when there was an error.
  We'll just log the error here.
  */
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  
  /*
  Create all the context menu items.
  */
  browser.contextMenus.create({
    id: "chama-no-zap",
    title: "Chamar %s no zap",
    contexts: ["selection"]
  }, onCreated);
  
  
  /*
  The click event listener, where we perform the appropriate action given the
  ID of the menu item that was clicked.
  */
  browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "chama-no-zap") {
        console.log(info.selectionText);
    }
  });
  