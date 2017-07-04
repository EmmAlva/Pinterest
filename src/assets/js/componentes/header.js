'use strict';

const Header = (data,update) => {
  //console.log(data);
  const header = $('<header></header>');
  const container = $('<div class="container"></div>');

  const row0 = $('<div class = "row "></div>');
  const colum = $('<div class="col-lg-6 col-lg-offset-3"></div>');
  const col1 = $('<div class="col-lg-6"></div>');
  const icon1 = $('<span src="../img/pencil.png" >pencil</span>');
  const icon2 = $('<span src="../img/arrow.png" >arrow</span>');
  const icon3 = $('<span src="../img/more.png" >more</span>');
  const col2 = $('<div class="col-lg-6"></div>');
  const btn = $('<button class="btn btn-danger pull-right">Seguir tablero</button>');

  const row = $('<div class = "row"></div>');
  const col = $('<div class="col-lg-6 col-lg-offset-3"></div>');
  const col1_6 = $('<div class="col-lg-6"></div>');
  const boardName = $('<h2 class="text-bold">'+data.name+'</h2>');
  const pins = $('<p><strong>'+data.pins+'</strong> Pines</p>');
  const followers = $('<p><strong>'+data.followers+'</strong> Seguidores</p>');
  const col2_6 = $('<div class="col-lg-6"></div>');
  const picture = $('<img class="img-circle pull-right" src="'+data.foto+'" alt="user">');

  header.append(container);
  container.append(row0);
  container.append(row);
  row0.append(colum);
  colum.append(col1);
  col1.append(icon1);
  col1.append(icon2);
  col1.append(icon3);
  colum.append(col2);
  col2.append(btn);
  row.append(col);
  col.append(boardName);
  col.append(col1_6);
  col.append(col2_6);
  col1_6.append(pins);
  col1_6.append(followers);
  col2_6.append(picture);

  return header;
}
