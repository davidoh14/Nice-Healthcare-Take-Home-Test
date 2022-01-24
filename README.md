# Nice Healthcare Assignment
 
Problem Set
Nice Healthcare is a technology-enabled direct primary care. We strive for our clinicians to make
same-day home visits at the patient's request, after a video visit between the patient and
clinician.
Depending on the patient’s symptoms, some home visits could include drawing of bodily fluids,
which will require the clinician to drop off the sample(s) at a designated lab that same day.
As one of Nice’s engineers, Gerald, the lead product manager has requested you to design and
develop logic to determine who is the best clinician to send to a patient’s home. In the MVP
(minimum viable product) version, Gerald determines limiting clinician’s drive time is sufficient.
Note that, a clinician typically drives from the clinician’s home and back after every home visit.
Data
Nice Clinicians:
[
{ name:“Barb”, address: “4120 Garfield Ave, Minneapolis, MN 55409” },
{ name:“Isaac”, address: “140 104th Ln NW, Blaine MN 55448” },
{ name:“Marisol”, address: “2393 Kalmia Ave, Boulder, CO 80304” },
{ name:“Mary”, address: “608 Spruce Dr, Hudson, WI 54016” },
{ name:“Shawna”, address: “1727 W Highland Pkwy, St Paul, MN 55116” },
{ name:“Shelly”, address: “1232 3rd St, Hudson, WI 54016” },
{ name:“Tom”, address: “14173 Flagstone Trail, Apple Valley MN 55124” }
]
Lab Drop Offs:
[
{ name:“Edina Lab”, address: “6525 France Ave, Edina, MN, 55435” },
{ name:“Medical Arts Lab”, address: “835 Nicollet Mall, Minneapolis, MN 55402” },
{ name:“Bloomington Lab”, address: “2716 E 82nd St, Bloomington, MN 55425” },
{ name:“Hudson Lab”, address: “400 2nd St S, Hudson, WI 54016” },
{ name:“Boulder Lab”, address: “4750 Nautilus Ct S, Boulder, CO 80301” }
]
Input
● Patient’s address
● Include lab (true/false)



Expected Output
● Clinician's name
● Distance in miles
Supporting Function
Please create a function that given two addresses will return the distance between the two
addresses in miles. For simplicity, let’s just have a random generator within this function return
any number between 1 and 100.
Assumptions
As you come across any question that you wished Gerald or your engineering colleagues were
available to answer, make a decision, and document that assumption in a README.
Solution
You can write the solution in any language you prefer.
Conclusion
Please add considerations to the following items in the README:

1. If we were to release the MVP to Production as Gerald requested, what are the limiting
factors of your solution? What issues do you think the users will run into immediately?

    - This solution only takes distance into consideration. A limiting factor is the lack of knowledge on each clinician's existing schedules. A clinician can be closer to a patient, but they may not have anymore availabilities that day to talk to new patients. The patient's schedule, in turn, should also be considered. 

2. Besides drive times, what other factors should Gerald be considering to optimize
sending the right clinician to a patient?

    - Clinician working hours should be considered to properly disqualify clinicians from any trips that would take them longer than the rest of their working period allows for.
    - Lab operating hours should be considered to properly disqualify clinicians from any trips where the clinician would not be able to make it to the lab in time.
    - Average duration of visit per diagnosis type is important to consider to calculate how much time a clinician has during the rest of their working hours, and how much time they would need to drop off a lab sample.


ASSUMPTIONS MADE: 
The clinicians have designated labs, so there should be a join's table between the clinician's table and the lab table. A model association would be built to access a clinician's designated lab address.
