const Header = (update) =>{
   const header = $("<header></header>");
   const section = $("<section></section>");
   const divContainerfluid = $("<div class='container-fluid'></div>");
   const divRow = $("<div class='row flex-container-row margin1x1'></div>");

   const divCol1 = $("<div class='col-xs-3 col-md-2'></div>");
   const aPintLog = $("<a href='#'></a>");
   const divPintLogHover = $("<div class='hover flex-container-column'></div>");
   const imgPintLog = $("<img src='pinterest-logo.png' height='28px' width='28px'>");
   const pPintLog = $("<p class='darkslategray-text-color'>Inicio</p>");

   const divCol2 = $("<div class='visible-xs col-xs-3'></div>");
   const divIcoSearchHover = $("<div class='hover flex-container-column'></div>");
   const icoSearch = $("<i style='font-size:24px' class='glyphicon glyphicon-search silver-text-color'></i>");
   const pIcoSeaerch = $("<p class='silver-text-color'>Buscar</p>");

   const divCol3 = $("<div class='hidden-xs col-md-4'></div>");
   const divInputGroup = $("<div class='input-group'></div>");
   const spanInpAdd = $("<span class='input-group-addon'></span>");
   const icoSearchHidden = $("<i style='font-size:22px' class='glyphicon glyphicon-search silver-text-color'></i>");
   const inputHiddenSearch = $("<input type='text' class='form-control' placeholder='Buscar'>");

   const divCol4 = $("<div class='col-xs-2 col-md-2'></div>");
   const aUser = $("<a href='#'></a>");
   const divUserHov = $("<div class='hover flex-container-column'></div>");
   const icoUser = $("<i style='font-size:24px' class='glyphicon glyphicon-user silver-text-color'></i>");
   const pUser = $("<p class='silver-text-color'>Guardado</p>");

   const divCol5 = $("<div class='col-xs-2 col-md-2'></div>");
   const aTask = $("<a href='#'></a>");
   const divTaskHov = $("<div class='hover flex-container-column'></div>");
   const icoTask = $("<i style='font-size: 24px' class='glyphicon glyphicon-tasks silver-text-color'></i>");
   const pTask = $("<p class='silver-text-color'>Categorías</p>");

   const divCol6 = $("<div class='col-xs-2 col-md-2'></div>");
   const aOption =$("<a href='#'></a>");
   const div

   icoTask.append(divTaskHov);
   pTask.append(divTaskHov);
   divTaskHov.append(aTask);
   aTask.append(divCol5);
   divCol5.append(divContainerfluid);

   icoUser.append(divUserHov);
   pUser.append(divUserHov);
   divUserHov.append(aUser);
   aUser.append(divCol4);
   divCol4.append(divContainerfluid);

   icoSearchHidden.append(spanInpAdd);
   spanInpAdd.append(divInputGroup);
   inputHiddenSearch.append(divInputGroup);
   divInputGroup.append(divCol3);
   divCol3.append(divContainerfluid);

   icoSearch.append(divIcoSearchHover);
   pIcoSeaerch.append(divIcoSearchHover);
   divIcoSearchHover.append(divCol2);
   divCol2.append(divContainerfluid);

   imgPintLog.append(divPintLogHover);
   pPintLog.append(divPintLogHover);
   divPintLogHover.append(aPintLog);
   aPintLog.append(divCol1);
   divCol1.append(divRow);

   divRow.append(divContainerfluid);
   divContainerfluid.append(section);
   section.append(header);
  //  bntSignUp.on("click",function(event) {
  //   state.selectedYape = 1;
  //   update();
  //  })
   return header;
 }
