/*  =============================================================================
    
    Copyright © Vent Origins 
    By Adrian Mandee and Randy Truong
    ========================================================================== */

function search() {
	event.preventDefault();
	console.log("Hello");
	console.log($("#query-input").val());

  // Displays tracks
  overlayTracks("#splash-screen");
}