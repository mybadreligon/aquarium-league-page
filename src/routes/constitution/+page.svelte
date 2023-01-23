<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneTwo, oneThree, oneFour, oneFive;
    let two, twoOne, twoTwo;
    let three, threeOne;
    let four, fourOne;
    let five;
    let six, sixOne;
    let seven;
    let eight, eightOne;
    let nine;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        text-decoration: underline;
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">The Aquarium League Charter</h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: Membership</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 Franchise Agreement</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2 Owner Responsibility</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.3 Tanking and Collusion</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneFour)}>1.4 League Commissioner</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneFive)}>1.5 League Dues and Treasury</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: League Makeup</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Scheduling</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Playoff Winner and Loser Brackets</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: Winning Payments</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: Rosters</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 Roaster Issues</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: Scoring</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Section 6: Trades</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>6.1 Offseason Trades</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 7: Waiver Wire</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(eight)}>Section 8: Draft</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightOne)}>Section 8.1: Rookie Draft</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(nine)}>Section 9: Modifying League Charter</h3>

    
    <hr />
    
    <h3 bind:this={one}>Section 1 Membership</h2>
    
    <p>12 Members<p>
    
    <h2 bind:this={oneOne}>1.1 Franchise Agreement</h3>
    
    <p>The Aquarium will be a dynasty league where all players are held from one year to the next.<p>
    
    <h2 bind:this={oneTwo}>1.2 Owner Responsibility</h3>
    
    <p>Each owner(s) is expected to run their team in a respectable fashion. They will be expected to set their line-ups on time and not have any injured players or players on bye weeks in their starting line-ups. If any owner neglects his duty constantly, he will be locked from his team and the commissioner will set their line-up to the most projected points for one week. If negligence continues they will be subjected to be voted (6 out of 11 votes needed) to be removed from the league and will NOT receive their money back.</p>
    
    <h2 bind:this={oneThree}>1.3 Tanking and Collusion</h3>
    
    <p>Tanking will not be tolerated in this dynasty league. If an owner is seen to be purposely tanking, they will be forced to draft last in the upcoming rookie draft and FORFEIT any traded picks back to the original owner of these draft picks. Tanking is defined as purposely losing by starting players that are injured, on a bye, or starting multiple players that OBVIOUSLY should not be in a starting line-up. The word “tanking” is flexible and the owner will be forced to explain why he started said player if brought up by MULTIPLE league members.</p>

    <p>Collusion will not be tolerated in this dynasty league. If two or more owners are found to be guilty of collusion league members, they will be subject to possibility of expulsion from the league as well as moves being reset. There will be no sharing fees or winnings or trading actual currency for any players.</p>
    
    <h2 bind:this={oneFour}>1.4 League Commissioner</h3>
    
    <p>Currently, the league commissioner is goldententacle. He is supported by co-comissioners JBackes33 and mybadreligon. Each year, if proposed by a league member the league can vote on a change in commissioner. As commissioner, you will not overstep your balance of power and only be forced to vacate your duties if the league calls for a vote.</p>

    <p>If a vote is called taken, a vote of 6 out of 11 will vacate the commissioner of their duties.</p>
    
    <h2 bind:this={oneFive}>1.5 League Dues and Treasury</h3>
    
    <p>Currently, the league buy-in fee is $100 USD (subject to change in future) and must be sent to LeagueSafe before the rookie draft takes place each year. The initial start-up will be $200 sent before the draft. Please send money to LeagueSafe. If the fee is not deposited before the start of the rookie draft,  the owner will not have access to their team until the fee has been paid. Refusal to pay will result in expulsion from the league. After the initial year, managers will be responsible for paying for the current year and the following year, regardless of pick trading.</p>

    <p>Trading of future first and/or second round draft picks will require payment for the year of the draft pick by the end of day two days after the trade is processed. Failure to do so will result in the transaction being reversed.</p>
    
    <h2 class="sectionHeading" bind:this={two}>Section 2 League Make-Up</h2>
    <p>The league will be a single conference of 12 teams ranking (for playoff seeding purposes) from best record to worst with tiebreaker decided by regular season points scored.</p>

    <h3 bind:this={twoOne}>2.1 Scheduling</h3>
    <p>The scheduling will be randomized by the website every year and will not be altered in any way once Week 1 begins.</p>

    <h3 bind:this={twoTwo}>2.2 Playoff Winner and Loser Brackets</h3>
    <p>6 teams will make the winners bracket as well as 6 teams will make the losers bracket. The 1 and 2 seeds will receive a bye while the 3 seed plays the 6 seed and the 4 seed plays the 5 seed.</p>
    <p>The same format will be used for the losers bracket. The losers bracket has no effect on draft order</p>
    
    <h2 class="sectionHeading" bind:this={three}>Section 3 Winning Payments</h2>
    <p>Payments are done via Leaguesafe<p>
    <p>Overall Winner Receives $800<p>
    <p>Second Overall Receives $300<p>
    <p>Third Overall Receives $100<p>
    
    <h3 bind:this={threeOne}>3.1 Scoring System</h3>
    <p>The league scoring system breakdown is listed on the Sleeper fantasy app (for the most part, it follows typical .5PPR Scoring). The scoring system will never change without a majority league vote.</p>
    
    <h2 class="sectionHeading" bind:this={four}>Section 4 Rosters</h2>
    
    <p>Starting line-ups will be as follows:</p>
    
    <p class="underscore">Starters</p>
    <ul>
        <li>QB</li>
        <li>RB</li>
        <li>RB</li>
        <li>WR</li>
        <li>WR</li>
        <li>TE</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>SUPERFLEX (QB/RB/WR/TE)</li>
        <li>15 Bench (RB/WR)</li>
        <li>5 Taxi</li>
        <li>4 IR</li>
    </ul>
    
        <p>The taxi squad will be locked shortly prior to the kickoff of the first game of the season. During the off season the roster limits (bench spots) will be increased by 4 to accommodate rookie draft picks. These spots will be added at the start of the rookie draft and will be removed 1 week prior to the taxi squad being locked.</p>
    
    <h3 bind:this={fourOne}>4.1 Roster Issues</h3>
    <p>If a problem arises where one cannot set their line-ups on time due to website issues or connection issues they are required to notify the commissioner of this issue and submit their intended line-up at least 10 minutes before the start of the Sunday games. Failure to notify said parties will result in starting the line-up that is currently set.</p>

    <h2 class="sectionHeading" bind:this={five}>Section 5 Scoring</h2>
    
    <ul>
        <li>1 pt. every 10 yards rushing/receiving.<li>
        <li>1 pt. every 25 yards passing.<li>
        <li>6 pts. for every passing TD<li>
        <li>6 pts. For every rushing/receiving TD<li>
        <li>2 pts. For passing/rushing/receiving 2 point conversion.<li>
        <li>-2 pts. For interception/fumble.<li>
        <li>There will be negative scoring as well that reflects this chart above.<li>
        <li>It is possible to tie. For Tiebreakers for playoff seeding see above.</li>
    </ul>
    
    <h2 class="sectionHeading" bind:this={six}>Section 6 Trades</h2>
    
    <p>All trades are processed immediately and only if TWO league members call for a vote, said trade be voted upon. A majority (6 out of 10) votes in favor of veto will result in the trade being voided. There is only a 24 hour window for the trades to be voted upon. Trading future picks will result in a full payment for the year of the pick.<p>
    <p>The trade deadline will take place at the conclusion of week 12.<p>
    
    <h3 bind:this={sixOne}>6.1 Removing Managers</h3>
    <p>Offseason Trades will be allowed once trading opens back up at the conclusion of the entire season. During the offseason, a league member has up to a week to call for a veto vote, and this vote has up to a week to be processed.</p>
    
    <h2 class="sectionHeading" bind:this={seven}>Section 7 Waiver Wire</h2>
    <p>The waiver wire will be FAAB Bidding. There will be separate FAAB allocations for the in season and off season. You will be reset to 200 dollars on FAAB starting after the final week of preseason. During the season players will be places on waivers for 2 days following their release. Once a player has played their game for the week they will remain on waivers until waivers process for the following week on WEDNESDAY at 12am PST. After the conclusion of the league championship game, FAAB allocation will be reset to 200 dollars. The waiver wire will process once a week during the offseason on SUNDAY, after the conclusion of the rookie draft. Players acquired and released within 24 hours will not be subject to waiver requirements.</p>
    
    <h2 class="sectionHeading" bind:this={eight}>Section 8 Draft</h2>
    <p>There will be an 8 hour limit for the initial draft. The draft time limit will be removed at 10 PM EST but you will still be able to pick. Draft clock will resume at 9 AM EST.  It is good etiquette to type in the chat who is On the Clock (OTC) in the chat tagging the person. The annual rookie drafts will begin a few weeks after the NFL draft. Rookie drafts will start without a timer and need for a timer can be evaluated as the draft progresses.</p>
    
    <h3 bind:this={eightOne}>8.1 Rookie Draft</h3>
    <p>Each year at the conclusion of the NFL Draft (subject to change) there will be a 4 round draft for rookies. The order will be decided by these values in this order.</p>
    <p>1. Playoff elimination</p>
    <p>2. Max Possible Points For</p>
    <p>3. Coin Flip (or equivalent random generation)</p>

    <h2 class="sectionHeading" bind:this={nine}>Section 9 Modifying League Charter</h2>
    <p>The league charter can be modified for the following year during the regular season. All proposed changes will be voted upon by the league and need a majority to take hold. i.e. League changes in the 2021 regular season take place in the 2022 season.</p>
    
</div>
