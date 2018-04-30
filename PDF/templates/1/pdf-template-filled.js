// playground requires you to assign document definition to a variable called dd

var dd = {

        // Page Orientation: [portrait or landscap]
        pageOrientation: 'landscape',

        // Margins: [left, top, right, bottom]
        pageMargins: [ 15, 15, 15, 10 ],

	content: [

		// Header
		{text: 'Jason Prater', style: 'header'},

        {
			style: '',
			color: 'black',

			table: {
				widths: [50, 134, 50, 134, 50, 134, 50, 134],
				headerRows: 2,

				body: [

// Header: Row 0
					[
					    // Column 1
					    {
					        text: 'Day 1',
					        style: 'dayHeader',
					        colSpan: 2,
					        border: [true, true,true,true],
					        fillColor: '#DCDCDC'
					    },

					    // Empty column span
					    {},

					    // Column 2
					    {
					        text: 'Day 2',
					        style: 'dayHeader',
					        colSpan: 2,
					        border: [true, true,true,true],
					        fillColor: '#DCDCDC'
					    },

					    // Empty column span
					    {},

					    // Column 3
					    {
					        text: 'Day 3',
					        style: 'dayHeader',
					        colSpan: 2,
					        border: [true, true,true,true],
					        fillColor: '#DCDCDC'
					    },

					    // Empty column span
					    {},

					     // Column 4
					    {
					        text: 'Day 4',
					        style: 'dayHeader',
					        colSpan: 2,
					        border: [true, true,true,true],
					        fillColor: '#DCDCDC'
					    },

					    // Empty column span
					    {}

					   ], // EO: Row 1
// Subheader: Row 1
					[
					    /*************** Day 1 ***************/
					   {
					        // Exercise
                            text: 'Exercise',
						    alignment: 'center',
						    style: 'subheader'
					    },
					    {

                            columns: [
    				            {
    					            // Variation
    					            width: 34,
            						text: 'Var',
            						style: 'subheader'
                                },
                                {
    					            // Weight
    					            width: 28,
            						text: 'Wt',
            						alignment: 'center',
            					    style: 'subheader'
                                },
                                {
                                    // Reps
                                    width:36,
            						text: 'Reps',
            						alignment: 'center',
            						style: 'subheader'
                                },
                                {
                                    // Tempo
                                    width: 50,
                                    text: 'Tempo',
                                    style: 'subheader'
                                },
                            ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					   {
					        // Exercise
                            text: 'Exercise',
						    alignment: 'center',
						    style: 'subheader'
					    },
					    {

                            columns: [
    				            {
    					            // Variation
    					            width: 34,
            						text: 'Var',
            						style: 'subheader'
                                },
                                {
    					            // Weight
    					            width: 28,
            						text: 'Wt',
            						alignment: 'center',
            					    style: 'subheader'
                                },
                                {
                                    // Reps
                                    width:36,
            						text: 'Reps',
            						alignment: 'center',
            						style: 'subheader'
                                },
                                {
                                    // Tempo
                                    width: 50,
                                    text: 'Tempo',
                                    style: 'subheader'
                                },
                            ], // EO Column
					    }, // EO Day 2

					    /*************** Day 3 ***************/
					   {
					        // Exercise
                            text: 'Exercise',
						    alignment: 'center',
						    style: 'subheader'
					    },
					    {

                            columns: [
    				            {
    					            // Variation
    					            width: 34,
            						text: 'Var',
            						style: 'subheader'
                                },
                                {
    					            // Weight
    					            width: 28,
            						text: 'Wt',
            						alignment: 'center',
            					    style: 'subheader'
                                },
                                {
                                    // Reps
                                    width:36,
            						text: 'Reps',
            						alignment: 'center',
            						style: 'subheader'
                                },
                                {
                                    // Tempo
                                    width: 50,
                                    text: 'Tempo',
                                    style: 'subheader'
                                },
                            ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					   {
					        // Exercise
                            text: 'Exercise',
						    alignment: 'center',
						    style: 'subheader'
					    },
					    {

                            columns: [
    				            {
    					            // Variation
    					            width: 34,
            						text: 'Var',
            						style: 'subheader'
                                },
                                {
    					            // Weight
    					            width: 28,
            						text: 'Wt',
            						alignment: 'center',
            					    style: 'subheader'
                                },
                                {
                                    // Reps
                                    width:36,
            						text: 'Reps',
            						alignment: 'center',
            						style: 'subheader'
                                },
                                {
                                    // Tempo
                                    width: 50,
                                    text: 'Tempo',
                                    style: 'subheader'
                                },
                            ], // EO Column
					    }, // EO Day 4

				    ], // EO Subheader: Row 1

 // Content: Row 2
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '2',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 2

// Content: Row 3
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '3',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 3

// Content: Row 4
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '4',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 4

// Content: Row 5
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '5',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 5

// Content: Row 6
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '6',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 6

// Content: Row 7
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '7',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 7

// Content: Row 8
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '8',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 8

// Content: Row 9
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '9',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 9

// Content: Row 10
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '10',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 10

// Content: Row 11
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '11',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 11

// Content: Row 12
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '12',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 12

// Content: Row 13
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '13',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 13

// Content: Row 14
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '14',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 14

// Content: Row 15
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '15',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 15

// Content: Row 16
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '16',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 16

// Content: Row 17
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '17',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 17

// Content: Row 18
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '18',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 18

// Content: Row 19
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '19',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 19

// Content: Row 20
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '20',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 4

// Content: Row 21
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '21',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 21

// Content: Row 22
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '22',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 21

// Content: Row 23
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '23',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 23

// Content: Row 24
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '24',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 24

// Content: Row 25
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '25',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 25

// Content: Row 26
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '26',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 26

 // Content: Row 27
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '27',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 27

// Content: Row 28
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '28',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 28

// Content: Row 29
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '29',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 29

// Content: Row 30
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '30',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 30

// Content: Row 31
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '31',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 2

// Content: Row 32
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '32',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 32

// Content: Row 33
				    [
				        /*************** Day 1 ***************/
					    {
                            // Exercise
                            text: '33',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 1

					    /*************** Day 2 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 2

				        /*************** Day 3 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 3

					    /*************** Day 4 ***************/
					    {
                            // Exercise
                            text: 'Back Squat',
						    style: 'exercise',
						    alignment: 'center'
					    },
					    {
                            columns: [
	                            {
					                // Variation
					                width: 34,
        						    text: 'Banded',
        						    style: 'variation'
					            },
					            {
					                // Weight
					                width: 36,
        						    text: '132lbs',
        						    style: 'weight'
					            },
					            {
					                // Reps
					                width:20,
        						    text: '31',
        						    style: 'reps'
					            },
					            {    // Tempo
					            	width: 52,
        						    text: '1:6:0',
        						    alignment: 'center',
        						    style: 'tempo',
					            },
						    ], // EO Column
					    }, // EO Day 4
				    ], // EO Content: Row 33



				] // EO Table Body
			} // EO Table
		},
    ], // EO Content

	styles: {

	    dayHeader: {
	       	fontSize: 14,
			bold: true,
			color: 'black',
			alignment: 'center',
			margin: [2,2,2,2],
	    },

		header: {
			fontSize: 16,
			bold: true,
			color: 'black',
			margin: [0, 0, 0, 10],
		},

		subheader: {
			fontSize: 9,
			color: 'black',
			bold: true,
			margin: [4, 0, 0, 0],
		},

	    content: {
			fontSize: 8,
			bold: true,
			color: 'black',
			margin: [0, 0, 0, 0],
		},

		exercise: {
		    fontSize: 8,
		    color: 'black',
			margin: [0, 0, 0, 0],
		},

		variation: {
		    fontSize: 8,
		    color: 'black',
			margin: [0, 0, 0, 0],
		},
		
		weight: {
		    fontSize: 8,
		    color: 'black',
		    alignment: 'left',
			margin: [5, 0, 0, 0]
		},

		reps: {
		    fontSize: 8,
		    color: 'black',
		    alignment: 'center',
			margin: [5, 0, 0, 0]
		},

		tempo: {
            fontSize: 9,
			margin: [5, 0, 0, 0]
		}
	},
	defaultStyle: {
		// alignment: 'justify'
	}

}
