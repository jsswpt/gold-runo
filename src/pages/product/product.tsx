import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { motion } from "framer-motion";
import { Container, Divider, ProductPhotoViewer, SaleBadge } from "@/shared/ui";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";

import { MdStar } from "react-icons/md";
import Link from "next/link";
import { AddToCart } from "..";
import { SelectColor, SelectFilling } from "@/features";
export const Product = () => {
  return (
    <motion.main>
      <div className={st.breadcrumbs_wrap}>
        <Container>
          <Breadcrumbs
            breadcrumbs={[
              { title: "YORCOM", to: "/" },
              { title: "Диваны", to: "/products/sofas" },
              { title: "Прямые диваны", to: "/products/sofas" },
              { title: "Финка", to: "/products/sofas" },
            ]}
          />
        </Container>
      </div>
      <section className={st.section_info}>
        <Container className={st.info_container}>
          <div className={st.info_left}>
            <div className={st.info_left_wrap__photo}>
              <ProductPhotoViewer
                photos={[
                  {
                    alt: "photo1",
                    src: "https://static.insales-cdn.com/images/products/1/5488/559355248/fde9f819-baa2-45dc-8.jpg",
                  },
                  {
                    alt: "photo2",
                    src: "https://static.insales-cdn.com/images/products/1/5485/559355245/9875dce6-36d5-4985-b.jpg",
                  },
                  {
                    alt: "photo3",
                    src: "https://static.insales-cdn.com/images/products/1/5487/559355247/f59b434f-ebd0-4e8e-8.jpg",
                  },
                  {
                    alt: "photo4",
                    src: "https://static.insales-cdn.com/images/products/1/5486/559355246/e4967420-e2a6-43f5-8.jpg",
                  },
                ]}
              />
            </div>

            <div className={st.info_left_wrap__description}>
              <p className={st.description_text}>
                Диван Финка невероятно мягкий и комфортабельный с простым
                механизмом. Его приятные округлые формы, благородная фактура
                обивки и лакончиный дизайн, Латы из натурального дерева создают
                ортопедический эффект, поддерживая правильную осанку. Три режима
                фиксации спинки. Задняя стенка дивана выполнена из ткани основы.
                Вместительный бельевой ящик
              </p>
            </div>
            <div className={st.info_left_wrap__specifications}>
              <div className={st.specifications_top}>
                <h2 className={cn("h2", st.specifications_title)}>
                  Характеристики
                </h2>
              </div>
              <div className={st.specifications_body}>
                <div className={st.specifications_left}>
                  <ul className={st.specifications_left_list}>
                    <li className={st.specifications_left_item}>
                      <div className={st.specifications_item_top}>
                        <p
                          className={cn(
                            "subtitle1",
                            st.specifications_subtitle
                          )}
                        >
                          Размеры
                        </p>
                      </div>

                      <div className={st.specifications_item_table}>
                        <div className={st.specifications_table_top}>
                          <p className={cn(st.specifications_table_headline)}>
                            Длина
                          </p>
                          <p className={cn(st.specifications_table_headline)}>
                            Ширина
                          </p>
                          <p className={cn(st.specifications_table_headline)}>
                            Высота
                          </p>
                        </div>
                        <div className={st.specifications_table_body}>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            200 см
                          </p>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            X
                          </p>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            150 см
                          </p>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            X
                          </p>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            50 см
                          </p>
                        </div>
                      </div>
                      <Divider />
                    </li>
                    <li className={st.specifications_left_item}>
                      <div className={st.specifications_item_top}>
                        <p
                          className={cn(
                            "subtitle1",
                            st.specifications_subtitle
                          )}
                        >
                          Спальное место
                        </p>
                      </div>

                      <div className={st.specifications_item_table}>
                        <div className={st.specifications_table_top}>
                          <p className={cn(st.specifications_table_headline)}>
                            Длина
                          </p>
                          <p className={cn(st.specifications_table_headline)}>
                            Ширина
                          </p>
                          <p className={cn(st.specifications_table_headline)}>
                            Высота
                          </p>
                        </div>
                        <div className={st.specifications_table_body}>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            200 см
                          </p>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            X
                          </p>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            150 см
                          </p>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            X
                          </p>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            50 см
                          </p>
                        </div>
                      </div>
                      <Divider />
                    </li>
                    <li className={st.specifications_left_item}>
                      <div className={st.specifications_item_top}>
                        <p
                          className={cn(
                            "subtitle1",
                            st.specifications_subtitle
                          )}
                        >
                          Посадочное место
                        </p>
                      </div>

                      <div className={st.specifications_item_table}>
                        <div className={st.specifications_table_top}>
                          <p className={cn(st.specifications_table_headline)}>
                            Глубина
                          </p>

                          <p className={cn(st.specifications_table_headline)}>
                            Высота
                          </p>
                        </div>
                        <div className={st.specifications_table_body}>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            200 см
                          </p>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            X
                          </p>
                          <p
                            className={cn(
                              "body2",
                              st.specifications_table_text
                            )}
                          >
                            150 см
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className={st.specifications_left_info_wrapper}>
                      <p className={st.specifications_list_item_point}>
                        Наполнение посадочного места:
                      </p>
                      <p className={st.specifications_list_item_text}>
                        независимый пружинный блок
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={st.specifications_right}>
                  <ul className={st.specifications_right_list}>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Механизм трансформации:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>
                        еврокнижка
                      </p>
                    </li>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Бельевой ящик:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>да</p>
                    </li>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Съёмный чехол:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>да</p>
                    </li>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Подушки:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>да</p>
                    </li>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Опоры:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>
                        натуральные
                      </p>
                    </li>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Вариант доставки:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>
                        в разобранном виде
                      </p>
                    </li>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Цвет:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>
                        коричневый
                      </p>
                    </li>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Каркас:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>
                        фанера, ДВП, ДСП, мебельный щит
                      </p>
                    </li>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Наполнение подушек:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>
                        крошка ППУ
                      </p>
                    </li>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Материал опор:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>
                        сращенный массив
                      </p>
                    </li>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Ткань:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>
                        нелла 089 велюр
                      </p>
                    </li>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Страна:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>
                        Россия
                      </p>
                    </li>
                    <li className={st.specifications_list_item}>
                      <p className={cn(st.specifications_list_item_point)}>
                        Бренд:
                      </p>
                      <p className={cn(st.specifications_list_item_text)}>
                        Золотое Руно
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={st.info_right}>
            <div className={st.info_right__name}>
              <div className={st.name__short_name}>
                <h1 className={st.product_short_name}>Финка</h1>
              </div>
              <div className={st.name__full_name}>
                <p className={st.product_full_name}>Диван Финка</p>
              </div>
            </div>
            <div className={st.info_right__rating}>
              <div className={st.rating_stars_wrapper}>
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
              <div className={st.rating_reviews}>
                <Link href="" className={st.reviews_link}>
                  5 отзывов
                </Link>
              </div>
            </div>
            <div className={st.info_right__price}>
              <p className={cn("h3", st.product_price)}>34 990 ₽</p>
              <p className={cn("subtitle2", st.product_old_price)}>34 990 ₽</p>
              <SaleBadge>10%</SaleBadge>
            </div>
            <div className={st.info_right__color}>
              <SelectColor
                colors={[
                  { color: "#323232", name: "Черный" },
                  { color: "yellow", name: "Жёлтый" },
                  { color: "red", name: "Красный" },
                  { color: "violet", name: "Фиолетовый" },
                ]}
                initialColor={{ color: "#323232", name: "Черный" }}
              />
            </div>
            <div className={st.info_right__filling}>
              <SelectFilling />
            </div>
            <div className={st.info_right__delievery}>
              <div className={st.delievery_top}>
                <p className={cn("body2", st.delievery_title)}>Доставка</p>
              </div>
              <div className={st.delievery_body}>
                <ul className={st.delievery_list}>
                  <li className={st.delievery_item}>
                    <p className={st.delievery_item_title}>По Челябинску</p>
                    <p className={st.delievery_item_title}>700 ₽</p>
                  </li>
                  <li className={st.delievery_item}>
                    <p className={st.delievery_item_title}>По России</p>
                    <p className={st.delievery_item_title}>от 1 000 ₽</p>
                  </li>
                  <li className={st.delievery_item}>
                    <p className={st.delievery_item_title}>Самовывоз</p>
                    <p className={st.delievery_item_title}>Бесплатно</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={st.info_right__button}>
              <AddToCart />
            </div>
          </div>
        </Container>
      </section>
    </motion.main>
  );
};
