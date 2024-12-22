import React from "react";
import "./history.scss";
import UnderLine from "../helper/UnderLine";
import img1 from "../../assets/abt-2.jpg.png";
import { Table } from "react-bootstrap";

const History = () => {
	return (
		<div className="gems-histyr">
			<div className="message-under">
				<p className="wel-gem">
					History <span>Infographics.</span>
				</p>
				<UnderLine width="50px" height="2px" bg=" #17D0CF" />
			</div>
			<p className="text-histy">
				About three decades ago, there was a dearth of good
				English-medium schools, and so parents, eager to give a good
				education to their wards, had no option but to enroll their
				wards in schools in India, which also meant the outflow of
				Nepalese revenue out of the country. Some far-sighted Nepalese
				citizens therefore came up with a proposal to establish
				English-medium schools within the country to impart quality
				education. In 1981 AD, under the initiative of Mr. Rajesh
				Khadka, Mr. Gopal Kumar Basnet, Mr. Sudhir Siwakoti, and Mr.
				Dinesh Malla, Little Flowers English School, LFES, with classes
				Nursery to Grade 2, was established in Birtamode, Jhapa, with 47
				students and 4 teachers. Over the years, it has evolved into a
				full-fledged school, perhaps the only school with all the
				required infrastructure in the Eastern Development Region, with
				classes up to the higher secondary level catering to over 1800
				students.
				<br />
				<br />
				Inspired by the success of the LFES and the encouragement of
				eminent educationists in Kathmandu, the Graded English Medium
				School, GEMS, was established in the year 1984 AD in a rented
				building in Sanepa Height in Lalitpur with just 78 students and
				18 teachers with classes from Nursery to III. The school was
				later housed in Kiran Bhavan. With the untiring efforts of the
				management, the teaching and non-teaching staff, and support
				from the parents, GEMS proudly stands aloft at Dhapakhel after
				moving from Sanepa into its spacious campus in 2001 AD, with an
				infrastructure that matches up to international standards. Mr.
				Parsuram Roka, who served as the principal for nearly a decade,
				was one of the pillars who made valuable contributions to the
				growth and development of GEMS. Many employees have remained
				with the school for a long, some from the time of its
				establishment, and have contributed significantly in their
				areas; therefore, their contribution is gratefully appreciated.
			</p>
			<div className="img-his">
				<img src={img1} alt="history image" />
			</div>
			<p className="text-histy">
				The support and cooperation of our valued parents, the zeal and
				enthusiasm of our students, and the goodwill of our other
				stakeholders have been instrumental in helping GEMS always
				strive for excellence in these last forty years. We are certain
				that in the coming days, their continued encouragement and
				support will help us reach higher and further and truly
				exemplify our motto, “Lead, Kindly Light.”
			</p>
			<div className="our-milestone">
				<p className="wel-gem">
					Our <span>Milestones.</span>
				</p>
				<Table responsive>
					<thead>
						<tr>
							<th> </th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2024 AD:</p>
							</td>
							<td>
								The school was awarded the “Outstanding School
								Award 2080 BS” by PABSON.
							</td>
						</tr>

						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2023 AD:</p>
							</td>
							<td>
								The school was awarded Rupees four lakh and
								eight students were awarded Rupees two lakh each
								by the Lalitpur Metropolitan City Municipality,
								Education Department, the regulatory authority
								of school education, for obtaining the highest
								GPA 4.
							</td>
						</tr>

						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2022 AD:</p>
							</td>
							<td>
								The school was awarded Rupees two lakh and two
								students were awarded Rupees one lakh each by
								the Lalitpur Metropolitan City Municipality,
								Education Department, the regulatory authority
								of school education, for obtaining the highest
								GPA 4.
							</td>
						</tr>

						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2010,  12, 15 & 17 AD: </p>
							</td>
							<td>
								Birendra National Education Shield and Flag
								along with Rupees two lakh cash prize.
							</td>
						</tr>

						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2008 AD:</p>
							</td>
							<td>
								The Higher Education Building was inaugurated by
								Dr. Emmanuel Y Angeles, The Chancellor of
								Angeles University Foundation (AUF), from the
								Philippines. The  following programmes were
								introduced in the same year:
								<br />
								<br />
								a.  The Plus two programme under Higher
								Secondary Education Board, offering Science.
								<br />
								<br />
								b.  The A Level under Cambridge University, UK.
								<br />
								<br />
								c.  The BS/MD (Bachelor of Science leading to
								Doctor of Medicine) program under the Angeles
								University Foundation in the Philippines was
								later discontinued by the direction of the
								Ministry of Education, Government of Nepal.
							</td>
						</tr>

						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2007 AD:</p>
							</td>
							<td>
								Birendra Regional Education Shield and Rupees
								fifty thousand.
							</td>
						</tr>

						{/* <tr>
              <td className="no-rap-text">
                {" "}
                <p>2002 AD:</p>
              </td>
              <td>
                Miss Sunita Yadav was the National Topper and Miss Sushila
                Khadka was 3rd among the girls.
              </td>
            </tr> */}

						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2003 AD:</p>
							</td>
							<td>
								Miss Sunita Yadav was the National Topper
								among the girls while Miss Sushila Khadka was
								3rd and Master Sugat Ratna Kansakar was placed
								7th in the all-Nepal board ranking.
							</td>
						</tr>
						{/* <tr>
							<td className="no-rap-text">
								{" "}
								<p>2001- 02 AD:</p>
							</td>
							<td>
								Miss Sunita Yadav was the National Topper and
								Miss Sushila Khadka was 3rd among the girls.
							</td>
						</tr> */}
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>1994 AD:</p>
							</td>
							<td>
								Master Kundan Nepal was placed 6th in the
								all-Nepal ranking for the SLC examination and
								Master Umesh Thapa was placed 9th in the
								all-Nepal board ranking.
							</td>
						</tr>

						<tr>
							<td className="no-rap-text">
								{" "}
								<p>1993 AD:</p>
							</td>
							<td>
								The first batch of 12 students appeared for the
								SLC examinations with outstanding results.
							</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>1984 AD:</p>
							</td>
							<td>Establishment of GEMS school at Sanepa.</td>
						</tr>
					</tbody>
				</Table>
			</div>
			<div className="our-milestone">
				<p className="wel-gem">
					Enrichment <span>Activities.</span>
				</p>
				<p className="few-txt-en">
					GEMS has always laid stress on the importance of
					extracurricular activities as a means to enhance the
					holistic development of our learners and encourages our
					students to excel in these fields as well.
				</p>
				<Table responsive>
					<thead>
						<tr>
							<th> </th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2023 & 24 AD:</p>
							</td>
							<td>WINNER - NISSA CUP (Football)</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2019 & 20 AD:</p>
							</td>
							<td>
								WINNER - Inter A Level Futsal Tournament <br />
								GLOBAL WINNER - Your World Competition
							</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2018 & 19 AD:</p>
							</td>
							<td>
								WINNER - Inter A Level Futsal Tournament <br />
								GLOBAL WINNER - Your World Competition
							</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2017 & 18 AD:</p>
							</td>
							<td>
								WINNER - NISSA CUP (Football) <br />
								WINNER - NISSA LEAGUE (Football) <br />
								WINNER - 6th Inter A Level Basketball Tournament
								(Girls) <br />
								WINNER - Inter College A Level Girls Basketball
								Tournament
							</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2016 & 17 AD:</p>
							</td>
							<td>
								WINNER - NISSA CUP (Football) <br />
								WINNER - NISSA LEAGUE (Football)
							</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2015 & 16 AD:</p>
							</td>
							<td>
								WINNER - NISSA Cup (Football) <br />
								WINNER - NISSA League (Football)
							</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2014 AD:</p>
							</td>
							<td>WINNER Inter College Debate Competition</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2013 AD:</p>
							</td>
							<td>
								WINNER - 3 On 3 A Level Girls Basketball
								Tournament
							</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2012 AD:</p>
							</td>
							<td>
								WINNER - Forum of Young Economist, Tourism
								Olympiad
							</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2011 AD:</p>
							</td>
							<td>WINNER - Inter A Level Sports Meet</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2010 AD:</p>
							</td>
							<td>
								WINNER - Forum of Young Economist, Tourism
								Olympiad
							</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2007 AD:</p>
							</td>
							<td>
								Six students participated in the 21st World
								Scouts Jamboree at Highlands Park, Chelmsford in
								the UK while twenty-three students took part in
								the scouts' jamboree held at Kolkata, India.
							</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2007 AD:</p>
							</td>
							<td>
								Three students of GEMS participated in the Judo
								Championship organized by Matsumoto Municipality
								in Japan.
							</td>
						</tr>

						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2004 AD:</p>
							</td>
							<td>
								The opera,' Chandalika' was presented by GEMS
								students under the aegis of IATA, in Toyama
								Japan.
							</td>
						</tr>

						<tr>
							<td className="no-rap-text">
								{" "}
								<p>2000 AD:</p>
							</td>
							<td>
								The 'Kumari Ballet' was staged at the 6th World
								Festival of Children's Theatre in Japan.
							</td>
						</tr>

						<tr>
							<td className="no-rap-text">
								{" "}
								<p>1998 AD:</p>
							</td>
							<td>
								GEMS was granted an affiliate membership of IATA
								with the Asian Regional Centre in Toyama, Japan.
							</td>
						</tr>

						<tr>
							<td className="no-rap-text">
								{" "}
								<p>1997 AD:</p>
							</td>
							<td>
								GEMS students won the championship trophy in the
								International School level Judo championship and
								was awarded the First International Judo Trophy
								jointly by the then Princess Shruti Shah and the
								former Prime minister of Japan, Mr. Ryutaro
								Hashimoto.
							</td>
						</tr>
						<tr>
							<td className="no-rap-text">
								{" "}
								<p>1996 AD:</p>
							</td>
							<td>
								GEMS students staged the opera, 'Black Dhurva',
								in Copenhagen, Denmark in the 5th World Festival
								of Children's Theatre organized by the
								International Amateur Theatre Association (IATA)
								and presented a glimpse of Nepali culture in the
								international arena.
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
			<div className="our-milestone">
				<p className="wel-gem">
					Imparting <span>Values. </span>
				</p>
				<p className="few-txt-en">
					Imparting values is a part of our everyday educational
					practice at GEMS to strengthen the moral fiber of our
					students; thus, from time to time, prominent personalities
					are invited to talk to the students to inspire them to
					inculcate strong moral values. The students also practice
					meditation at the beginning of the day before the classes
					begin.
				</p>
			</div>
			<div className="our-milestone">
				{/* <p className="wel-gem">
          Our <span>Alumni.</span>
        </p> */}

				{/* <Table responsive>
          <thead>
            <tr>
              <th> </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="no-rap-text">
                {" "}
                <p>2054 BS (1997 AD):</p>
              </td>
              <td>
                Our Alumnus Master Ujjwal Raut, was awarded the Presidential
                Award in Luther College, Iowa, USA and completed his PhD in
                Space Engineering Science from Virginia University in 2009 AD,
                and is employed in the same university.
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                Master Pramod Khadka completed his PhD in Economics from George
                town University, USA, in 2009 AD and is currently teaching in
                Ajou University in South Korea.
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                Master Kundan Nepal completed his PhD in Electrical science and
                Computer Engineering and and is an Assistant Professor at
                Bucknell University in Pennsylvania, USA and has
                received numerous awards and fellowships.
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                Master Jubin Rajbhandari, an alumnus of GEMS is currently a
                Missile Systems Engineer in the US Department of Defense.
              </td>
            </tr>
          </tbody>
        </Table> */}
			</div>
		</div>
	);
};

export default History;
