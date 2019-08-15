
import "./assets/css/main.css";

import React, { Component } from 'react'

class Header extends Component {

	render() {
		return (
			<div className="Main">
				<article id="top" className="wrapper style1">
					<div className="container">
						<div className="row">
							<div className="col-8 col-7-large col-12-medium">
								<header>
									 <a href="https://cafesicilia.modoo.at"> <strong><h1>CAFE <strong>SICILIA</strong></h1></strong> </a>
									<p>ITALIAN RESTAURANT </p>
								</header>

								<p> <strong>이탈리아 방식 그대로</strong> 반죽하고 숙성한 도우를 400°C 고온의 <strong> 화덕에서 </strong>바로 구워내어 쫄깃하고 담백한 맛의 <strong>정통 이탈리안 피자와,</strong> 시칠리아 풍미의 독창적인 소스와 레시피로 <strong>흔히 접할 수 없는 이탈리안 요리 </strong>를 선보입니다 </p>

							</div>
						</div>

						<div className="row aln-center">
							<div className="col-4 col-6-medium col-12-small">
								<section className="box style1">
									<h3>{this.props.title}</h3>
									<p>{this.props._desc}</p>
								</section>
							</div>
						</div>
					</div>
				</article>
			</div>
		)
	}
}


export default Header