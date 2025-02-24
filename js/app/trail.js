$(".welcomeContentTabContainer").append("<div class=\"GuidedTour\" onclick=\"triggerTour();\">Guided Tour</div>")

function triggerTour()
{
    if(typeof active_tour!='undefined') 
    {
        active_tour.complete();
    } 
    
    if(document.querySelector('a[ng-click="setWelcomeView(0)"].welcomeContentTabs.active')) { HomeTour.start() }
    else if(document.querySelector('#candidateresults div.gridActionButtons [icon-btn="flow"]')) { startTotalLinkTour(); } 
    else if(document.querySelector('.trpage .widgetTabData'))  { startTalentRecordTour(); }  
    else if(document.querySelector('a[ng-click="setWelcomeView(1)"].welcomeContentTabs.active')) { startRequisitionsTour(); }
    else if(document.querySelector('a[ng-click="setWelcomeView(2)"].welcomeContentTabs.active') && document.querySelector('#candidateresults .gridRecordsTitle.ng-scope')) { startMyCandidatesTour(); }
}

////////////objects that consist the data of the steps/////////////////////

//you can do your changes in the steps below 

//////////////Home_tour_steps///////////

var home_tour_steps={
    "Steps":[
       {
      "Selector":"#xx",
      "Title":"Guided Tour",
      "HTMLText":"We have redesigned the look feel of the application to make your life easy. Please continue the tour till the end to explore all the new features. <br/> <ul><li>For the steps which has the hand icon <span class=\"SelectableStep\"></span> in the step header the highlighited item is actionable<span></li><li>While tour is in progress, you can use escape key or close icon to exit the tour</li><li>You can use Next and Previous buttons to move back and forth in the tour.</li></ul>",
      "PreviousButton":false,
      "NextButton":true,
      "FinishButton":false,
      "Position" :'bottom',
      "CanClickTarget": false,
      "Trigger": false,
      "Question": false,
      "NavigateTo" : ""
      },       
       {
      "Selector":".welcomeContentTabs:nth-child(n+1)",
      "Title":"Tabbed View",
      "HTMLText":"Most commonly used items from hamburger menu are pulled here for quick access and we have modular tours for the redesigned tabs.</small>",
      "PreviousButton":true,
      "NextButton":true,
      "FinishButton":false,
      "Position" :'bottom',
      "CanClickTarget": false,
      "Trigger": false,
      "Question": false,
      "NavigateTo" : ""
      },
      {
      "Selector":".personalizeWidgetSwitch",
      "Title":"Toggle Light/Dark Mode",
      "HTMLText":"You can now choose your preferred mode from Light and Dark modes, where all the pages in our application respects your preference every time you login.",
      "PreviousButton":true,
      "NextButton":true,
      "FinishButton":false,
      "Position" :'bottom',
      "CanClickTarget": true,
      "Trigger": false,
      "Question": false,
      "NavigateTo" : ""
      },
      {
      "Selector":".pageHeaderTitle button[icon-btn=\"settings\"].icon-btn",
      "Title":"Handy Widgets",
      "HTMLText":'Select the widgets that you’d like to see on the homepage. Choose from existing widgets or customize.',
      "PreviousButton":true,
      "NextButton":true,
      "FinishButton":false,
      "Position" :'bottom',
      "CanClickTarget": false,
      "Trigger": false,
      "Question": false,
      "NavigateTo" : ""
      },
      {
        "Selector":'.welcomeWidgetActions',
        "Title":"Filter Date Range",
        "HTMLText":'Select the calendar icon to customize the date range for each widget. The widget remembers your choice until you change the date range.',
        "PreviousButton":true,
        "NextButton":true,
        "FinishButton":false,
        "Position" :'right',
        "CanClickTarget": true,
        "Trigger": false,
        "Question": false,
        "NavigateTo" : ""
      },
      {
        "Selector":'div.welcomeWidget div[aria-hidden="false"] button[icon-btn="arrowright"]',
        "Title":"Expand to Grid",
        "HTMLText":'Select this icon to see the detailed view of any widget. This opens either a grid or a page that has more information.',
        "PreviousButton":true,
        "NextButton":true,
        "FinishButton":false,
        "Position" :'bottom',
        "CanClickTarget": false,
        "Trigger": false,
        "Question": false,
        "NavigateTo" : ""
      },
      {
        "Selector":false,
        "Title":"End of Home tour",
        "HTMLText":'Do you want to go to the Requisition tour?',
        "PreviousButton":false,
        "NextButton":false,
        "FinishButton":true,
        "Position" :'bottom',
        "CanClickTarget": false,
        "Question": true, ////// dialogue box pops up when the current tour ends and askes whether you want to go to the next tour
        "Trigger": false,
        "NavigateTo" : ""
      },
      {
        "Selector":'a.welcomeContentTabs:nth-child(2)',
        "Title":"Reqs",
        "HTMLText":'Select this link and tour the requisition section.',
        "PreviousButton":false,
        "NextButton":false,
        "FinishButton":false,
        "Position" :'bottom',
        "CanClickTarget": true,
        "Trigger": true,
        "Question": false,
        "NavigateTo" : "NextTour"
      }
    ],
    NextTour: 'RequisitionsTour'
    }

/////////////// Requsitions_tour_steps//////////

var requisitions_tour_steps={
        "Steps":[
        {
          "Selector":".reqmaincontent .reqStatusToggle.ng-scope",
          "Title":"Req Status.",
          "HTMLText":"Choose All Statuses or a specific status to view the Reqs in that status and then toggle between All Reqs and My Reqs below.",
          "PreviousButton":true,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": false,
          "Question": false,
          "NavigateTo" : ""
        },
        {
          "Selector":".reqmaincontent #gridStatusFilter-button",
          "Title":"All Vs My",
          "HTMLText":'Here you can choose "All Reqs" or "My Reqs". This is applied in conjunction with the Req Status you choose above.',
          "PreviousButton":true,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": false,
          "Question": false,
          "NavigateTo" : ""
        },
        {
          "Selector":'.reqmaincontent div.gridFilterActions [icon-btn="filter"]:not(.ng-hide)',
          "Title":"Saved Filters",
          "HTMLText":"Click to Save, Manage and Apply your filters all in the same place.",
          "PreviousButton":false,
          "NextButton":false,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": true,
          "NavigateTo" : "NextStep"
        },
        {
          "Selector":'.reqmaincontent .manageFilters.ng-scope',
          "Title":"Saved Filters",
          "HTMLText":"Save, Manage and Apply your filters all in the same place.",
          "PreviousButton":true,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": false,
          "NavigateTo" : ""
        },
        {
          "Selector":'.reqmaincontent div.gridFilterInput [icon-btn="search"]',
          "Title":"Filter Visible Grid",
          "HTMLText":"Filter the grid in your view easily from this quick filter.",
          "PreviousButton":true,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": false,
          "NavigateTo" : ""
        },
        {
          "Selector":'.reqmaincontent div.gridActionButtons [icon-btn="settings"]',
          "Title":"Personalize Columns",
          "HTMLText":"Choose and re-order the columns of your grid from here.",
          "PreviousButton":true,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": false,
          "Trigger": false,
          "NavigateTo" : ""
        },
        {
          "Selector":'.reqmaincontent div.gridActionButtons [icon-btn="export"]',
          "Title":"Export to Excel",
          "HTMLText":"Select this icon to export the grid to MS Excel.",
          "PreviousButton":true,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": false,
          "NavigateTo" : ""
        },
        {
          "Selector":'.reqmaincontent div.gridActionButtons [ng-if="showAddReqAction"]',
          "Title":"Add Req",
          "HTMLText":"Launching Add req is too easy now.",
          "PreviousButton":true,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": false,
          "Trigger": false,
          "NavigateTo" : ""
        },
        {
          "Selector":'.reqmaincontent #reqListGrid div[role="grid"]:nth-child(2) .ui-grid-canvas .ui-grid-row.row-0',
          "Title":"Single Row Actions",
          "HTMLText":'Right Click anywhere on any row of the grid and a context menu appears. Various actions that you can take on that row are displayed. Also, actions are grouped into appropriate categories.',
          "PreviousButton":true,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": false,
          "Question": false,
          "NavigateTo" : ""
        },
        {
          "Selector":'.reqmaincontent #reqListGrid div[role="grid"]:nth-child(1) .ui-grid-canvas .ui-grid-row.row-0',
          "Title":"Multiple Row Actions",
          "HTMLText":"Select either a single row or multiple rows to see the action header dynamically popping above the grid. This header displays all the actions you can take based on your selection (grouped into appropriate categories).",
          "PreviousButton":true,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": false,
          "Question": false,
          "NavigateTo" : ""
        },
        {
          "Selector":'.reqmaincontent .candcnt_total.candidateCount:nth-child(1)',
          "Title":"Total Link",
          "HTMLText":"Click here to launch candidates inside the req",
          "PreviousButton":false,
          "NextButton":false,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": true,
          "NavigateTo" : "TotalLinkTour"
        },
        {
         "Selector": "a.welcomeContentTabs:nth-child(3)",
         "Title": "my candidates option",
         "HTMLText": "Select this link and tour the my candidates section.",
         "PreviousButton": false,
         "NextButton": false,
         "FinishButton": true,
         "Position": 'bottom',
          "CanClickTarget": true,
         "Trigger": true,
         "Question": false,
         "NavigateTo": "NextTour"
        }
      ],
      NextTour: "MyCandidatesTour"
      }

var total_link_tour_steps={
        "Steps":[
        {
          "Selector":'#candidateresults div.gridActionButtons [icon-btn="flow"]',
          "Title":"HR status bubbles",
          "HTMLText":"Select this icon to display a bird’s eye view of the number of candidates in each HR status",
          "PreviousButton":true,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": false,
          "NavigateTo" : "",
          "CustomFunctionBefore" : "setBasedOnBubbleState"
        },
        {
          "Selector":'#candidateresults div.widgetStatusCircleContainer [ng-click="selectWidgetStatus(status)"]',
          "Title":"Actionable Bubble",
          "HTMLText":"Click on a bubble to toggle its selection. Based on the selection, the candidates are filtered in or filtered out of the grid.",
          "PreviousButton":false,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": false,
          "NavigateTo" : ""
        },
        {
          "Selector":'#candidateresults div.gridActionButtons [icon-btn="card"]',
          "Title":"Grouped Card View",
          "HTMLText":"Select this icon to see the redesigned card view, where you can see the candidates grouped into different HR Status",
          "PreviousButton":false,
          "NextButton":false,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": true,
          "NavigateTo" : "NextStep"           
        },
        {
          "Selector":'div.kanbanStepButtons:not(.ng-hide)  button[icon-btn="angleright"][ng-click="expandKanbanPane(step)"].icon-btn.icon-small',
          "Title":"Expand to 2 columns",
          "HTMLText":"Select this icon to expand the card column of a specific status. When expanded, all the cards of a specific status are rearranged into two columns instead of one column.",
          "PreviousButton":false,
          "NextButton":false,
          "FinishButton":false,
          "Position" :'top',
          "CanClickTarget": true,
          "Trigger": true,
          "NavigateTo" : "NextStep"
        },
        {
          "Selector":'div.kanbanStepButtons:not(.ng-hide)  button[icon-btn="angleleft"][ng-click="expandKanbanPane(step)"].icon-btn.icon-small',
          "Title":"Collapse to 1 column",
          "HTMLText":"Select this icon to collapse a two-column status into a one column.",
          "PreviousButton":false,
          "NextButton":false,
          "FinishButton":false,
          "Position" :'top',
          "CanClickTarget": true,
          "Trigger": true,
          "NavigateTo" : "NextStep"
        },
        {
          "Selector":'div.kanbanStepButtons:not(.ng-hide)  button[icon-btn="angleleft"][ng-click="collapseKanbanPane(step)"].icon-btn.icon-small',
          "Title":"Minimize Column",
          "HTMLText":"Select this icon to collapse a column completely.",
          "PreviousButton":false,
          "NextButton":false,
          "FinishButton":false,
          "Position" :'top',
          "CanClickTarget": true,
          "Trigger": true,
          "NavigateTo" : "NextStep",
          "CustomFunctionDuring": "scrollKanbanLeft"
        },
        {
          "Selector":'div.kanbanSteps:not(.ng-hide) button[icon-btn="angleright"][ng-click="collapseKanbanPane(step)"].icon-btn.icon-small',
          "Title":"Maximize Column",
          "HTMLText":"Select this to expand the candidates in this HR status",
          "PreviousButton":false,
          "NextButton":false,
          "FinishButton":false,
          "Position" :'top',
          "CanClickTarget": true,
          "Trigger": true,
          "NavigateTo" : "NextStep"
        },
        {
            "Selector":false,
            "Title":"End of requisition tour",
            "HTMLText":"Do you want to go to the My Candidates tour?",
            "PreviousButton":false,
            "NextButton":false,
            "FinishButton":true,
            "Position" :'bottom',
            "CanClickTarget": false,
            "Trigger": false,
            "Question": true,  ////// dialogue box pops up when the current tour ends and askes whether you want to go to the next tour
            "NavigateTo" : ""
        },
        {
          "Selector":"a.welcomeContentTabs:nth-child(3)",
          "Title":"My Candidates",
          "HTMLText":"Select this link and tour the my candidates section.",
          "PreviousButton":false,
          "NextButton":false,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": true,
          "Question": false,
          "NavigateTo" : "NextTour"
        }
    ],
    NextTour: "MyCandidatesTour"
}


////////////   My_candidates_tour_steps///////////
var my_candidates_tour_steps={
  "Steps":[
      {
          "Selector":'.ui-grid-contents-wrapper div[role=\"grid\"]:nth-child(2) .ui-grid-canvas .ui-grid-row.row-0 div[role=\"gridcell\"] .trlink.tooltip.candname',
          "Title":"Talent Record link",
          "HTMLText":"Select a candidate's name to view redesigned talent record and its tour.",
          "PreviousButton":false,
          "NextButton":false,
          "FinishButton":false,
          "Position" :'top',
          "CanClickTarget": true,
          "Trigger": true,
          "NavigateTo" : "NextTour"
      },
    ],
    NextTour: "TalentRecordTour"
}

/////////////// talent_record_tour_steps///////////////////////

var talent_record_tour_steps={
    "Steps":[
        {
            "Selector":'.trpage .widgetTabData',
            "Title":"All Tabs",
            "HTMLText":'We reimagined the entire set of tabs for a new look.',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'top',
            "CanClickTarget": false,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":' .widgetTab.tab2',
            "Title":"Click on notes tab",
            "HTMLText":'The Notes has a host of new features.',
            "PreviousButton":false,
            "NextButton":false,
            "FinishButton":false,
            "Position" :'top',
            "CanClickTarget": true,
            "Trigger": true,
            "NavigateTo" : "NextStep"
        },
        {
            "Selector":'.collabAddNote.ng-scope .collabEditor',
            "Title":"Collaborative Notes",
            "HTMLText":'While typing the notes, You can tag other user(s) using @ symbol. You can insert a shortcut link to the candidate, req, forms or attachments using # symbol.You can insert a shortcut link to an action using the { symbol',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":'.collabAddNote.ng-scope .collabButtons .collabButton:nth-child(1)',
            "Title":"Note Visibility",
            "HTMLText":'Before posting the notes, you can control the visibility of the notes by selecting appropriate option from here',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'top',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":'.widgetTab.tab5',
            "Title":"submissions tab",
            "HTMLText":'This tab displays all the details about all the submissions of this candidate in the form of cards.',
            "PreviousButton":false,
            "NextButton":false,
            "FinishButton":false,
            "Position" :'top',
            "CanClickTarget": true,
            "Trigger": true,
            "NavigateTo" : "NextStep"
        },
        {
            "Selector":'.widgetSubmissionCards button[ng-click="setSelectedSubmission(submission)"].icon-btn.icon-small',
            "Title":"Submission specific view",
            "HTMLText":'Select this to see the candidate resume, candidate profile specific to a submission',
            "PreviousButton":false,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'top',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":'.widgetTab.tab6',
            "Title":"Integrations Tab",
            "HTMLText":'This is a brand-new tab in the Talent record. You may see the candidate import history or even manually export the candidate from this tab.',
            "PreviousButton":false,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'top',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":'.widgetTab.tab7',
            "Title":'Req Specific View',
            "HTMLText":'View all the activities of the candidate that are specific to this req.',
            "PreviousButton":false,
            "NextButton":false,
            "FinishButton":false,
            "Position" :'top',
            "CanClickTarget": true,
            "Trigger": true,
            "NavigateTo" : "NextStep"
        },
        {
            "Selector":'button[icon-btn="settings"].icon-btn.actionLink',
            "Title":'Add/Pick Overview Cards',
            "HTMLText":'Choose among the available overview cards that you want to view, also you can create your own custom card.',
            "PreviousButton":false,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'top',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":'.widgetItemCards .widgetItemCard.offerItemCard.ng-scope',
            "Title":'Offer card',
            "HTMLText":'The candidate offer details against to this req will be displayed here and you can post to candidate zone rite from here.',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'left',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
          "Selector":'button[icon-btn="flow"].icon-btn.icon-small',
          "Title":'Actionlog time line view',
          "HTMLText":'Select this to view the candidate action log in a timeline view',
          "PreviousButton":false,
          "NextButton":false,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": true,
          "NavigateTo" : "NextStep" 
        },
        {
            "Selector":'.workflowStepFilter .workflowJumpToField',
            "Title":'Jump within timeline view',
            "HTMLText":'Select any HR Status from here to scroll the actionlog timeline view to that HR Status',
            "PreviousButton":false,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":'.candidateNavButtons',
            "Title":'Previous Candidate/Next Candidate',
            "HTMLText":'Navigate among the candidates in the grid without having to go back to the grid, using the previous and next buttons.',
            "PreviousButton":true,
            "NextButton":false,
            "FinishButton":true,
            "Position" :'bottom',
            "CanClickTarget": false,
            "Trigger": false,
           "NavigateTo" : "NextTour"
        },
    ],
    NextTour: ""
  }

//////////////customizing the buttons according to the steps/////////////////
function customFunctionBefore(customFunctionName,allSteps,stepNumber)
{
    switch(customFunctionName)
    {
        case "setBasedOnBubbleState" : allSteps = setBasedOnBubbleState(allSteps,stepNumber); break;
    }
    return allSteps;
}

  function setBasedOnBubbleState(allSteps,stepNumber)
  {
      
        if(document.querySelector('.carbonUI .widgetStatusContainer.show')!=null)
        {
          allSteps[stepNumber]['PreviousButton'] = true;
          allSteps[stepNumber]['NextButton'] =  true;
          allSteps[stepNumber]['CanClickTarget'] = false;
        }
        else
        {
          allSteps[stepNumber]['PreviousButton'] = false;
          allSteps[stepNumber]['NextButton'] =  false;
          allSteps[stepNumber]['Trigger'] = true;
          allSteps[stepNumber]['NavigateTo'] = 'NextStep';
        }
        return allSteps;
  }

function scrollKanbanLeft(){
    $(".kanbanContainer").animate({ scrollLeft: $(".kanbanContainer").scrollLeft() - 400 });
}

  function builtbuttons(tour,tour_steps,step_number)
  {
    let custom_buttons=[];
    if(typeof tour_steps[step_number]['CustomFunctionBefore'] != 'undefined' && tour_steps[step_number]['CustomFunctionBefore']!= "")
    {
        tour_steps = customFunctionBefore(tour_steps[step_number]['CustomFunctionBefore'],tour_steps,step_number);
    }
        
    if(tour_steps[step_number]['PreviousButton'])//check the status of the button 
      {
        custom_buttons.push({text: 'Previous',action()
        { /////check if the next element is present
          if((document.querySelector(tour_steps[step_number-1]['Selector']))!=null )
          {
            tour.back();
          }
          else// if the element is not found, the step is skipped 
          {
            let i=step_number-1;
            while ((document.querySelector(tour_steps[i]['Selector']))==null)
            {
              i--;
            }
            tour.show(i);
          }
        }})//if the button id set to true,then add the button
      }
      
      if(tour_steps[step_number]['NextButton'])
      {
        custom_buttons.push({text: 'Next',action()
        { /////check if the next element is present
          if((document.querySelector(tour_steps[step_number+1]['Selector']))!=null)
          {
            tour.next();
          }
          else// if the element is not found, the step is skipped
          {
            let i=step_number+1;
            while ((document.querySelector(tour_steps[i]['Selector']))==null)
            {
              if(tour_steps[i]['Question']){ ////// if the next step has a question i.e., whether to go to the next tour then this loop will be broken the the step pops up
                break;
              }
              else{
                i++;


              }
            }
            tour.show(i);
          }
        }})
      }
      if(tour_steps[step_number]['FinishButton'])
      {
        custom_buttons.push({text: 'Finish',action: tour.complete})
      }

      if(tour_steps[step_number]['Question']) ////// if question in the tour_steps is true then an extra button will be added to the step
      {
        custom_buttons.push({text: 'Yes',action: tour.next})
      }

      
  
      return custom_buttons;
  }


/////////////////////initializing tour objects///////////////////////////

let HomeTour = createTour(home_tour_steps);

let active_tour=HomeTour;
let active_tour_steps=home_tour_steps;
/////////////////key down events/////////////////////

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    console.log('Esc key pressed.');
    if (active_tour.isActive())
    {
      active_tour.complete();
    }
    active_tour=HomeTour;
    active_tour_steps=home_tour_steps;
  }
  if (false && evt.keyCode == 39) {
      console.log('right arrow is pressed!!!');
      console.log(Shepherd.activeTour.steps.indexOf(Shepherd.activeTour.currentStep));
      let i=Shepherd.activeTour.steps.indexOf(Shepherd.activeTour.currentStep);// getting the current step index
      if((document.querySelector(active_tour_steps.Steps[i]['Selector']))!=null)
      {
        console.log(active_tour_steps.Steps[i]['Title'])
        console.log('going to this step')
        active_tour.show(i);
      }
      else// if the element is not found, the step is skipped
      {
        while ((document.querySelector(active_tour_steps.Steps[i]['Selector']))==null)
        {
          if(active_tour_steps.Steps[i]['Question']) {  ////// if the next step has a question i.e., whether to go to the next tour then this loop will be broken the the step pops up
            break;
          }
          else{
          console.log(active_tour_steps.Steps[i]['Title'])
          console.log('skipping this step')
          i++;
          }
        }
        active_tour.show(i);
      }
  }
  if (false && evt.keyCode == 37) {
    console.log('left arrow is pressed!!!');
    console.log(Shepherd.activeTour.steps.indexOf(Shepherd.activeTour.currentStep));
    let i=Shepherd.activeTour.steps.indexOf(Shepherd.activeTour.currentStep);// getting the current step index
    if((document.querySelector(active_tour_steps.Steps[i]['Selector']))!=null)
    {
      console.log(active_tour_steps.Steps[i]['Title'])
      console.log('going to this step')
      active_tour.show(i);
    }
    else// if the element is not found, the step is skipped
    {
      while ((document.querySelector(active_tour_steps.Steps[i]['Selector']))==null)
      {
        console.log(active_tour_steps.Steps[i]['Title'])
        console.log('skipping this step')
        i--;
      }
      active_tour.show(i);
    }
}
};

///////////////////////////////



//////////////////////////creating tour objects/////////////////////////////////

function createTour(steps)
{
  var tour = new Shepherd.Tour({
    useModalOverlay: true,
    keyboardNavigation:false,
    defaultStepOptions: {
    cancelIcon: {
      enabled: true
    },
    classes: 'shadow-md bg-purple-dark',
    scrollTo: {
      behavior: 'auto', block: 'center'
    }}});
tour = addSteps(tour,steps);
return tour;
}

///////////////////adding steps to the tour////////////////////////

function addSteps(tour,definedSteps)
{
  //initializing a variable to access the steps
step_number=0;

while (step_number<definedSteps.Steps.length)
{
      //adding buttons according to the steps
      let custom_buttons=builtbuttons(tour,definedSteps.Steps,step_number);
      let check_selector=definedSteps.Steps[step_number]['Selector'];
      
      //adding the step
      if(definedSteps.Steps[step_number]['Trigger']==false)
      {
        tour.addStep({
          id: step_number,
          title: '<h3>'+definedSteps.Steps[step_number]['Title']+(definedSteps.Steps[step_number]['CanClickTarget'] ? '<span class="SelectableStep"></span>' : '')+'</h3>',
          text: definedSteps.Steps[step_number]['HTMLText'],
          attachTo: {
            element: definedSteps.Steps[step_number]['Selector'],
            on: definedSteps.Steps[step_number]['Position']
          },
          canClickTarget:definedSteps.Steps[step_number]['CanClickTarget'],
          buttons: custom_buttons
        });
      }
      else
      {
        let next_selector;
        if (definedSteps.Steps[step_number]['NavigateTo']=="NextStep")
        {
          next_selector=definedSteps.Steps[step_number+1]['Selector'];
        }
        let navigate=definedSteps.Steps[step_number]['NavigateTo'];
        let CustomFunctionDuring= definedSteps.Steps[step_number]['CustomFunctionDuring'];
        tour.addStep({
          id: step_number,
          title: '<h3>'+definedSteps.Steps[step_number]['Title']+(definedSteps.Steps[step_number]['CanClickTarget'] ? '<span class="SelectableStep"></span>' : '')+'</h3>',
          text: definedSteps.Steps[step_number]['HTMLText'],
          attachTo: {
            element: definedSteps.Steps[step_number]['Selector'],
            on: definedSteps.Steps[step_number]['Position']
          },
          buttons: custom_buttons,
          when: {
            show: () => 
            document
              .querySelectorAll(check_selector)
              .forEach(b => b.addEventListener("click", function(){
                 
                if(typeof CustomFunctionDuring != 'undefined' && CustomFunctionDuring != '')
                {
                   switch(CustomFunctionDuring)
                  {
                      case "scrollKanbanLeft" : scrollKanbanLeft(); break;
                  }
                }
                  
                if(navigate=="NextStep")//checking if the trigger is for nextstep
                {
                  if(next_selector==false){  //// if the selector obj is false that means it is the step before the start of next tour                            
                    tour.next();             //// so the step will not wait for any selector to display, it just pops up the dialouge box.
                  }  
                  else{
                  var interval = setInterval(function () {
                    if (document.querySelector(next_selector)) {
                        clearInterval(interval);
                        tour.next();
                    }
                }, 100);
                }}
                else//if the trigger is for nexttour
                {
                  console.log('getting the current step')
                  console.log(Shepherd.activeTour.steps.indexOf(Shepherd.activeTour.currentStep));
                  tour.complete();

                  switch(definedSteps.NextTour)
                  {
                      case "RequisitionsTour": 
                            startRequisitionsTour();
                            break;
                      case "MyCandidatesTour" :  
                            if (navigate == "TotalLinkTour")
                            {
                                tour.complete();
                                startTotalLinkTour();
                            }
                            else{ 
                                startMyCandidatesTour();
                            }
                          break;  
                      case "TalentRecordTour":
                            startTalentRecordTour();
                            break;
                  } 
              }
            },{once:true}))
          }
        });

      }
  //going to the next step
  step_number++;
}
return tour;
}

function startRequisitionsTour(){
        startTour(requisitions_tour_steps,'div[aria-hidden="false"].breadCrumbContainer.breadCrumbPages');
}

function startTotalLinkTour(){
        startTour(total_link_tour_steps,'#candidateresults .gridRecordsTitle.ng-scope');
}

function startMyCandidatesTour(){
        startTour(my_candidates_tour_steps,'.ui-grid-contents-wrapper div[role="grid"]:nth-child(2) .ui-grid-canvas .ui-grid-row.row-0 div[role="gridcell"] .trlink.tooltip.candname');
}

function startTalentRecordTour()
{
        startTour(talent_record_tour_steps,'.widgetTabData');                         
}

function startTour(tour_steps,selectorBeforeTourStart)
{
         var interval = setInterval(function () {
                                if (document.querySelector(selectorBeforeTourStart)) {
                                    clearInterval(interval);
                                    let Tour = createTour(tour_steps);
                                    active_tour=Tour;
                                    active_tour_steps=my_candidates_tour_steps;
                                    Tour.start();
                                }
                              }, 100);
}
