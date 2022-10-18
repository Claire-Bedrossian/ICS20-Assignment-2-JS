// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates the area and perimeter of a square with user input
 */
function myButtonClicked() {
  // input
  const sideA = parseInt(document.getElementById("sideA-number").value)

  //process

  const perimeter = sideA * 4 

  // output
  document.getElementById("perimeter").innerHTML =
    "Perimeter is equal to: " + perimeter + " cm"
}