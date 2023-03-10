(() => {
	"use strict";
	let t = (t, e = 500, o = 0) => {
			t.classList.contains("_slide") ||
				(t.classList.add("_slide"),
				(t.style.transitionProperty = "height, margin, padding"),
				(t.style.transitionDuration = e + "ms"),
				(t.style.height = `${t.offsetHeight}px`),
				t.offsetHeight,
				(t.style.overflow = "hidden"),
				(t.style.height = o ? `${o}px` : "0px"),
				(t.style.paddingTop = 0),
				(t.style.paddingBottom = 0),
				(t.style.marginTop = 0),
				(t.style.marginBottom = 0),
				window.setTimeout(() => {
					(t.hidden = !o),
						!o && t.style.removeProperty("height"),
						t.style.removeProperty("padding-top"),
						t.style.removeProperty("padding-bottom"),
						t.style.removeProperty("margin-top"),
						t.style.removeProperty("margin-bottom"),
						!o && t.style.removeProperty("overflow"),
						t.style.removeProperty("transition-duration"),
						t.style.removeProperty("transition-property"),
						t.classList.remove("_slide"),
						document.dispatchEvent(
							new CustomEvent("slideUpDone", {
								detail: {
									target: t,
								},
							})
						);
				}, e));
		},
		e = !0;
	setTimeout(() => {
		false;
	}, 0);
	const o = document.querySelector(".content__btn"),
		n = document.querySelector(".content__wrapper");
	let l = 1;
	o &&
		(document.addEventListener("click", (t) => {
			if (t.target.classList.contains("checkbox__input")) {
				const e = t.target.getAttribute("id"),
					o = document.querySelector(`[data-sel="${e}"]`);
				t.target.checked
					? (o.style.display = "block")
					: (o.style.display = "none");
			}
		}),
		o.addEventListener("click", () => {
			const t = document.createElement("div");
			t.classList.add("content__row"), n.appendChild(t);
			const e = document.createElement("div");
			t.appendChild(e);
			const o = document.createElement("label"),
				i = document.createElement("input");
			e.appendChild(o),
				e.appendChild(i),
				e.classList.add("content__line"),
				o.classList.add("content__label", "label"),
				o.setAttribute("for", `form-${l}`),
				(o.textContent = "???????? ?? ?????????? ????????????????:"),
				i.classList.add("content__input", "input_date"),
				i.setAttribute("id", `form-${l}`),
				i.setAttribute("type", "datetime-local"),
				i.setAttribute("autocomplete", "off"),
				i.setAttribute("name", `date-${l}`);
			const s = document.createElement("div");
			t.appendChild(s), s.classList.add("content__checkbox", "checkbox");
			const r = document.createElement("input"),
				a = document.createElement("label"),
				c = document.createElement("span");
			a.appendChild(c),
				s.appendChild(r),
				s.appendChild(a),
				c.classList.add("checkbox__text"),
				r.classList.add("checkbox__input"),
				r.setAttribute("id", `c_${l}`),
				r.setAttribute("type", "checkbox"),
				r.setAttribute("value", `0`),
				r.setAttribute("name", `repeat-${l}`),
				a.classList.add("checkbox__label"),
				a.setAttribute("for", `c_${l}`),
				(c.textContent = "??????????????????"),
				(t.innerHTML += `\n\t\t<select class="content__select" data-sel="c_${l}" name="period-${l}">\n\t\t\t<option value="day" selected>???????????? ????????</option>\n\t\t\t<option value="2_day">?????????? ????????</option>\n\t\t\t<option value="3_day">?????????? 2 ??????</option>\n\t\t\t<option value="4_day">?????????? 3 ??????</option>\n\t\t\t<option value="5_day">?????????? ???????????? 4 ??????</option>\n\t\t\t<option value="6_day">?????????? ???????????? 5 ????????</option>\n\t\t\t<option value="7_day">?????????? ???????????? 6 ????????</option>\n\t\t\t<option value="week">?????? ?? ????????????</option>\n\t\t\t<option value="mon">???????????? ??????????????????????</option>\n\t\t\t<option value="tue">???????????? ??????????????</option>\n\t\t\t<option value="wed">???????????? ??????????</option>\n\t\t\t<option value="thu">???????????? ??????????????</option>\n\t\t\t<option value="fri">???????????? ??????????????</option>\n\t\t\t<option value="sat">???????????? ??????????????</option>\n\t\t\t<option value="sun">???????????? ??????????????????????</option>\n\t\t</select>\n\t\t`),
				l++;
		})),
		(function (t) {
			let e = new Image();
			(e.onload = e.onerror =
				function () {
					!(function (t) {
						let e = !0 === t ? "webp" : "no-webp";
						document.documentElement.classList.add(e);
					})(2 == e.height);
				}),
				(e.src =
					"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
		})(),
		document.querySelector(".icon-menu") &&
			document.addEventListener("click", function (t) {
				e &&
					t.target.closest(".icon-menu") &&
					(((t = 500) => {
						document.documentElement.classList.contains("lock")
							? ((t = 500) => {
									let o = document.querySelector("body");
									if (e) {
										let n = document.querySelectorAll("[data-lp]");
										setTimeout(() => {
											for (let t = 0; t < n.length; t++)
												n[t].style.paddingRight = "0px";
											(o.style.paddingRight = "0px"),
												document.documentElement.classList.remove("lock");
										}, t),
											(e = !1),
											setTimeout(function () {
												e = !0;
											}, t);
									}
							  })(t)
							: ((t = 500) => {
									let o = document.querySelector("body");
									if (e) {
										let n = document.querySelectorAll("[data-lp]");
										for (let t = 0; t < n.length; t++)
											n[t].style.paddingRight =
												window.innerWidth -
												document.querySelector(".wrapper").offsetWidth +
												"px";
										(o.style.paddingRight =
											window.innerWidth -
											document.querySelector(".wrapper").offsetWidth +
											"px"),
											document.documentElement.classList.add("lock"),
											(e = !1),
											setTimeout(function () {
												e = !0;
											}, t);
									}
							  })(t);
					})(),
					document.documentElement.classList.toggle("menu-open"));
			}),
		(function () {
			const e = document.querySelectorAll("[data-spollers]");
			if (e.length > 0) {
				const o = Array.from(e).filter(function (t, e, o) {
					return !t.dataset.spollers.split(",")[0];
				});
				o.length && l(o);
				let n = (function (t, e) {
					const o = Array.from(t).filter(function (t, o, n) {
						if (t.dataset[e]) return t.dataset[e].split(",")[0];
					});
					if (o.length) {
						const t = [];
						o.forEach((o) => {
							const n = {},
								l = o.dataset[e].split(",");
							(n.value = l[0]),
								(n.type = l[1] ? l[1].trim() : "max"),
								(n.item = o),
								t.push(n);
						});
						let n = t.map(function (t) {
							return (
								"(" +
								t.type +
								"-width: " +
								t.value +
								"px)," +
								t.value +
								"," +
								t.type
							);
						});
						n = (function (t) {
							return t.filter(function (t, e, o) {
								return o.indexOf(t) === e;
							});
						})(n);
						const l = [];
						if (n.length)
							return (
								n.forEach((e) => {
									const o = e.split(","),
										n = o[1],
										i = o[2],
										s = window.matchMedia(o[0]),
										r = t.filter(function (t) {
											if (t.value === n && t.type === i) return !0;
										});
									l.push({
										itemsArray: r,
										matchMedia: s,
									});
								}),
								l
							);
					}
				})(e, "spollers");

				function l(t, e = !1) {
					t.forEach((t) => {
						(t = e ? t.item : t),
							e.matches || !e
								? (t.classList.add("_spoller-init"),
								  i(t),
								  t.addEventListener("click", s))
								: (t.classList.remove("_spoller-init"),
								  i(t, !1),
								  t.removeEventListener("click", s));
					});
				}

				function i(t, e = !0) {
					let o = t.querySelectorAll("[data-spoller]");
					o.length &&
						((o = Array.from(o).filter(
							(e) => e.closest("[data-spollers]") === t
						)),
						o.forEach((t) => {
							e
								? (t.removeAttribute("tabindex"),
								  t.classList.contains("_spoller-active") ||
										(t.nextElementSibling.hidden = !0))
								: (t.setAttribute("tabindex", "-1"),
								  (t.nextElementSibling.hidden = !1));
						}));
				}

				function s(e) {
					const o = e.target;
					if (o.closest("[data-spoller]")) {
						const n = o.closest("[data-spoller]"),
							l = n.closest("[data-spollers]"),
							i = l.hasAttribute("data-one-spoller"),
							s = l.dataset.spollersSpeed
								? parseInt(l.dataset.spollersSpeed)
								: 500;
						l.querySelectorAll("._slide").length ||
							(i && !n.classList.contains("_spoller-active") && r(l),
							n.classList.toggle("_spoller-active"),
							((e, o = 500) => {
								e.hidden
									? ((t, e = 500, o = 0) => {
											if (!t.classList.contains("_slide")) {
												t.classList.add("_slide"),
													(t.hidden = !t.hidden && null),
													o && t.style.removeProperty("height");
												let n = t.offsetHeight;
												(t.style.overflow = "hidden"),
													(t.style.height = o ? `${o}px` : "0px"),
													(t.style.paddingTop = 0),
													(t.style.paddingBottom = 0),
													(t.style.marginTop = 0),
													(t.style.marginBottom = 0),
													t.offsetHeight,
													(t.style.transitionProperty =
														"height, margin, padding"),
													(t.style.transitionDuration = e + "ms"),
													(t.style.height = n + "px"),
													t.style.removeProperty("padding-top"),
													t.style.removeProperty("padding-bottom"),
													t.style.removeProperty("margin-top"),
													t.style.removeProperty("margin-bottom"),
													window.setTimeout(() => {
														t.style.removeProperty("height"),
															t.style.removeProperty("overflow"),
															t.style.removeProperty("transition-duration"),
															t.style.removeProperty("transition-property"),
															t.classList.remove("_slide"),
															document.dispatchEvent(
																new CustomEvent("slideDownDone", {
																	detail: {
																		target: t,
																	},
																})
															);
													}, e);
											}
									  })(e, o)
									: t(e, o);
							})(n.nextElementSibling, s)),
							e.preventDefault();
					}
				}

				function r(e) {
					const o = e.querySelector("[data-spoller]._spoller-active"),
						n = e.dataset.spollersSpeed
							? parseInt(e.dataset.spollersSpeed)
							: 500;
					o &&
						!e.querySelectorAll("._slide").length &&
						(o.classList.remove("_spoller-active"), t(o.nextElementSibling, n));
				}
				n &&
					n.length &&
					n.forEach((t) => {
						t.matchMedia.addEventListener("change", function () {
							l(t.itemsArray, t.matchMedia);
						}),
							l(t.itemsArray, t.matchMedia);
					});
				const a = document.querySelectorAll("[data-spoller-close]");
				a.length &&
					document.addEventListener("click", function (e) {
						e.target.closest("[data-spollers]") ||
							a.forEach((e) => {
								const o = e.closest("[data-spollers]"),
									n = o.dataset.spollersSpeed
										? parseInt(o.dataset.spollersSpeed)
										: 500;
								o.querySelectorAll("._slide").length ||
									(e.classList.remove("_spoller-active"),
									t(e.nextElementSibling, n));
							});
					});
			}
		})();
})();
