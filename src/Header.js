import React from 'react';
import "./assets/css/main.css";
function Header() {
	return (


		<div className="Main">
			<article id="top" className="wrapper style1">
				<div className="container">
					<div className="row">
						<div className="col-4 col-5-large col-12-medium">

						</div>
						<div className="col-8 col-7-large col-12-medium">
							<header>
								<p> <a href="https://cafesicilia.modoo.at"> <strong><h2>CAFE <strong>SICILIA</strong></h2></strong> </a></p>
								<p>ITALIAN RESTAURANT </p>
							</header>

							<p> <strong>이탈리아 방식 그대로</strong> 반죽하고 숙성한 도우를 400°C 고온의 <strong> 화덕에서 </strong>바로 구워내어 쫄깃하고 담백한 맛의 <strong>정통 이탈리안 피자와,</strong> 시칠리아 풍미의 독창적인 소스와 레시피로 <strong>흔히 접할 수 없는 이탈리안 요리 </strong>를 선보입니다 </p>

						</div>
					</div>

					<div className="row aln-center">
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">

								<h3>Pasta</h3>
								<p>세계 최대의 파스타면 생산기업 이탈리아 Baria 사의 스파게티 면과 이탈리아 남단에서 재배된 토마토종을 사용하여 당과 산의 비율이 최적화된 롱고바디 토마토홀 </p>
							</section>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">

								<h3>Pizza</h3>
								<p>이탈리아산 최상품 밀가루만을 조합해 직접 반죽하고 24시간이상 저온숙성해 485°C 화덕에 구워낸 나폴리 정통 피자</p>
							</section>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">

								<h3>Steak</h3>
								<p>호주산 청정우 안심필렛과 일주일간 끓여낸 Fonde veau와 port wine을 배합, 뉴질랜드산 앵커버터로 풍미를 끓어올린 port wine sauce 사용</p>
							</section>
						</div>
					</div>
				</div>
			</article>


		</div>

	)
}


export default Header